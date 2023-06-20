export default function postCollectedOrder() {
  // работает
  const order = JSON.parse(localStorage.getItem('order'));
  fetch('http://127.0.0.1:8000/api/order/collected/', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify({
      orderkey: order.orderkey,
      status: 'collected',
    }),
  })
    .then((response) => response.json())
    .then((commits) => console.log(commits));
}
