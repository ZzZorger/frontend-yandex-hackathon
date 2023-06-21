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
  getUserToken(barcode) {
    // return fetch('http://127.0.0.1:8000/api/auth/login/', {
    return fetch(`${this._server}/api/auth/login/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        // confirmation_code: 'ad481436-a8da-467a-96fc-167e3e999fb5',
        confirmation_code: barcode,
      }),
    }).then((res) => this._getResponseData(res));
  }
  getTables(token) {
    return fetch(`${this._server}/api/tables/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'Authorization': `Bearer ${token}`
      },
    }).then((res) => this._getResponseData(res));
  }
  postTable(id, token) {
    return fetch(`${this._server}/api/select-table/${id}/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'Authorization': `Bearer ${token}`
      },
    }).then((res) => this._getResponseData(res));
  }
  postPrinter(barcodeText, token) {
    return fetch(`${this._server}/api/select-printer/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        barcode: barcodeText,
      }),
    }).then((res) => this._getResponseData(res));
  }
  getOrder(token) {
    return fetch(`${this._server}/api/order/find/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'Authorization': `Bearer ${token}`
      }
    }).then((res) => this._getResponseData(res));
  }
  getOrderDetails(token, orderKey) {
    return fetch(`${this._server}/api/order/details/?orderkey=${orderKey}`.replace(/"/g, ''), {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'Authorization': `Bearer ${token}`
      }
    }).then((res) => this._getResponseData(res));
  }
}

const api = new Api({
  baseUrl: 'http://127.0.0.1:8000',
  headers: {
    'Content-Type': 'application/json',
  },
});

export { api };
