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
        // confirmation_code: 'ad481436-a8da-467a-96fc-167e3e999fb5',
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
}
// "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjg3MjAzNTIxLCJpYXQiOjE2ODcxMTcxMjEsImp0aSI6IjA2ODczNDFmYjM2OTQ0MGE4OTU0MjJhNjdmZDk5OTk1IiwidXNlcl9pZCI6ImFkNDgxNDM2LWE4ZGEtNDY3YS05NmZjLTE2N2UzZTk5OWZiNSJ9.O-oQtRYBMlrRWAhwZ2kA-LHPW0JMlKTE2OmVmDIxgA8"


const api = new Api({
  baseUrl: 'http://127.0.0.1:8000',
  headers: {
    'Content-Type': 'application/json',
  },
});

export { api };
