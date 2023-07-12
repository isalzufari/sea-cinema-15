class UsersHandler {
  constructor(service, balancesService) {
    this._service = service;
    this._balancesService = balancesService;

    this.getUserHandler = this.getUserHandler.bind(this);
    this.postUserHandler = this.postUserHandler.bind(this);
  }

  async postUserHandler(request, h) {
    const { username, password, name, age } = request.payload;

    const userId = await this._service.addUser({ username, password, name, age });
    await this._balancesService.addBalance({ id_user: userId });

    const response = h.response({
      status: 'success',
      message: 'User berhasil ditambahkan',
      data: userId,
    });
    response.code(201);
    return response;
  }

  async getUserHandler(request, h) {
    const { id: id_user } = request.auth.credentials;

    const users = await this._service.getUser({ id_user });
    const { amount } = await this._balancesService.getBalance({ id_user });

    const mappedUser = users.map((user) => ({
      ...user,
      photo: user.photo ? `http://${request.headers.host}/${u.image}` : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
      balance: amount
    }));

    console.log(mappedUser);

    const response = h.response({
      status: 'success',
      data: mappedUser[0],
    });
    response.code(201);
    return response;
  }
}

module.exports = UsersHandler;
