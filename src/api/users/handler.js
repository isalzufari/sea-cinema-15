class UsersHandler {
  constructor(service, balancesService) {
    this._service = service;
    this._balancesService = balancesService;

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
}

module.exports = UsersHandler;
