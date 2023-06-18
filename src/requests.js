export function postBox(productInNewBox) {
  // оставь мне эту функцию
  let productInMainBox = [];
  let productInCurrentBox = [];
  let fullArreyProduct = [];
  let cartontype = [];

  const order = JSON.parse(localStorage.getItem('order'));
  const addCartontype = JSON.parse(localStorage.getItem('newCartontype'));
  const s = new Set(productInNewBox.map((e) => JSON.stringify(e)));
  const product = order.skus.filter((e) => !s.has(JSON.stringify(e)));

  productInMainBox.push({ sku: product[0].sku, packaging_number: 1 });
  productInCurrentBox.push({ sku: productInNewBox[0].sku, packaging_number: 2 });
  cartontype.push(addCartontype);
  // cartontype.push(order.recommended_cartontype);
  fullArreyProduct = productInMainBox.concat(productInCurrentBox);
  console.log(fullArreyProduct);
  console.log(order.recommended_cartontype);

  // fetch('http://127.0.0.1:8000/api/order/add-packaging-data/', {
  //   method: 'PATCH',
  //   headers: {
  //     'Content-Type': 'application/json;charset=utf-8',
  //   },
  //   body: JSON.stringify({
  //     orderkey: order.orderkey,
  //     selected_cartontypes: ['1798d071-abbd-42f1-9ae1-64a516dc98a3'],
  //     total_packages: 2,
  //     skus: fullArreyProduct,
  //   }),
  // })
  //   .then((response) => response.json())
  //   .then((commits) => console.log(commits));
}
