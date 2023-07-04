class BalancesHandler {
  constructor(service) {
    this._service = service;

    this.topUpBalanceHandler = this.topUpBalanceHandler.bind(this);
    this.withDrawBalanceHandler = this.withDrawBalanceHandler.bind(this);
  }

  async getBalanceHandler(request, h) {

  }

  async topUpBalanceHandler(request, h) {
    const { id: id_user } = request.auth.credentials;
    const { amount } = request.payload;

    await this._service.topUpBalance({ amount, id_user });

    const response = h.response({
      status: 'success',
      message: 'Balance successfully topup',
    });
    response.code(201);
    return response;
  }

  async withDrawBalanceHandler(request, h) {
    const { id: id_user } = request.auth.credentials;
    const { amount } = request.payload;

    const { amount: currentBalance } = await this._service.getBalance({ id_user });

    if (amount > 500000 || amount > currentBalance) {
      const response = h.response({
        status: 'fail',
        message: `The maximum amount that can be withdraw is Min (current balance ${currentBalance}, 500.000)`
      });
      response.code(201);
      return response;
    }

    await this._service.withdrawBalance({ amount, id_user });

    const response = h.response({
      status: 'success',
      message: 'Balance successfully withdraw',
    });
    response.code(201);
    return response;
  }
}

module.exports = BalancesHandler;
