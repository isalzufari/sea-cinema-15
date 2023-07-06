class BookingsHandler {
  constructor(service, ticketsService, seatsService, balancesService, moviesService) {
    this._service = service;
    this._ticketsService = ticketsService;
    this._seatsService = seatsService;
    this._balancesService = balancesService;
    this._moviesService = moviesService;

    this.getBookingHandler = this.getBookingHandler.bind(this);
    this.postBookingHandler = this.postBookingHandler.bind(this);
    this.deleteBookingHandler = this.deleteBookingHandler.bind(this);
  }

  async getBookingHandler(request, h) {
    const { id: id_user } = request.auth.credentials;
    const booked = await this._service.getBooked({ id_user });

    const { id: id_booked } = booked[0];
    const tickets = await this._ticketsService.getTicket({ id_booked })

    console.log(id_booked);

    const mappedBooking = booked.map((book) => ({
      ...book,
      tickets
    }));

    const response = h.response({
      status: 'success',
      data: mappedBooking[0]
    });
    response.code(201);
    return response;
  }

  async postBookingHandler(request, h) {
    const { id: id_user } = request.auth.credentials;
    const { id_movie, total_cost, tickets } = request.payload;

    const { amount: currentBalance } = await this._balancesService.getBalance({ id_user });

    if (total_cost > currentBalance) {
      const response = h.response({
        status: 'fail',
        message: `your currentBalance:${currentBalance} is not enough!`,

      });
      response.code(201);
      return response;
    }

    const { age_rating } = await this._moviesService.getMovie({ id: id_movie });

    let reviewedAge = false;
    tickets.forEach((ticket) => {
      const { age } = ticket;
      if (age < age_rating) {
        reviewedAge = true;
      }
    });

    if (reviewedAge) {
      const response = h.response({
        status: 'fail',
        message: `Your age not allowed to watch this movie!`,

      });
      reviewedAge = false;
      response.code(201);
      return response;
    }

    await this._balancesService.withdrawBalance({ amount: total_cost, id_user })

    const id_booked = await this._service.addBooked({ id_user, id_movie, total_cost });

    tickets.forEach(async (ticket) => {
      const { id_seat, name, age } = ticket;
      await this._ticketsService.addTicket({ id_booked, id_seat, name, age });
      await this._seatsService.bookedSeat({ id_seat });
    });

    const response = h.response({
      status: 'success',
      message: 'Booking successfully',
      data: id_booked
    });
    response.code(201);
    return response;
  }

  async deleteBookingHandler(request, h) {
    const { id: id_user } = request.auth.credentials;
    const { id_booked, total_cost, id_seat } = request.payload;

    await this._service.deleteBooked({ id_booked, id_user });

    id_seat.forEach(async (id) => {
      await this._seatsService.unBookedSeat({ id_seat: id });
    });

    await this._balancesService.topUpBalance({ amount: total_cost, id_user });

    const response = h.response({
      status: 'success',
      message: 'Unbooking successfully',
    });
    response.code(201);
    return response;
  }
}

module.exports = BookingsHandler;
