class BalancesHandler {
  constructor(service, balancesHistoryService) {
    this._service = service;
    this._balanceHistory = balancesHistoryService;

    this.getBalanceHandler = this.getBalanceHandler.bind(this);
    this.topUpBalanceHandler = this.topUpBalanceHandler.bind(this);
    this.withDrawBalanceHandler = this.withDrawBalanceHandler.bind(this);
  }

  async getBalanceHandler(request, h) {
    const { id: id_user } = request.auth.credentials;
    const { id: id_balance, amount } = await this._service.getBalance({ id_user });
    const history = await this._balanceHistory.getBalanceHistory({ id_balance })

    const mappedBalance = { amount, history }

    const response = h.response({
      status: 'success',
      data: mappedBalance,
    });
    response.code(201);
    return response;
  }

  async topUpBalanceHandler(request, h) {
    const { id: id_user } = request.auth.credentials;
    const { amount } = request.payload;

    const { id: id_balance } = await this._service.getBalance({ id_user });

    await this._service.topUpBalance({ amount, id_user });
    await this._balanceHistory.addBalanceHistory({ id_balance, amount, status: 'topup' });

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

    const { id: id_balance, amount: currentBalance } = await this._service.getBalance({ id_user });

    if (amount > 500000 || amount > currentBalance) {
      const response = h.response({
        status: 'fail',
        message: `The maximum amount that can be withdraw is Min (current balance ${currentBalance}, 500.000)`
      });
      response.code(201);
      return response;
    }

    await this._service.withdrawBalance({ amount, id_user });
    await this._balanceHistory.addBalanceHistory({ id_balance, amount, status: 'withdraw' });

    const response = h.response({
      status: 'success',
      message: 'Balance successfully withdraw',
    });
    response.code(201);
    return response;
  }
}

module.exports = BalancesHandler;
