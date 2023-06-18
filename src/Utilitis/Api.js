class Api {
  constructor(options) {
    this._server = options.baseUrl;
    this._headers = options.headers;
  }
  _getResponseData(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }
  getUserToken() {
    return fetch(`${this._server}/api/auth/login/`, {
      method: 'GET',
      headers: this._headers,
      credentials: 'include',
    }).then((res) => this._getResponseData(res));
  }
}

const api = new Api({
  baseUrl: '',
  headers: {
    'Content-Type': 'application/json',
  },
});

export { api };
