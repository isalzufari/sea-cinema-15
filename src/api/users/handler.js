class UsersHandler {
  constructor(service) {
    this._service = service;

    this.postUserHandler = this.postUserHandler.bind(this);
  }

  async postUserHandler(request, h) {
    console.log('postUser')
    const { username, password, name, age } = request.payload;

    const userId = await this._service.addUser({ username, password, name, age });

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
