// map method
const prices = [20, 10, 30, 25, 15, 40, 80, 5];

const salePrices = prices.map((price) => {
  return price / 2;
});

console.log(salePrices);

const products = [
  {name: 'gold star', price: 20},
  {name: 'mushroom', price: 40},
  {name: 'green shells', price: 30},
  {name: 'banana skin', price: 10},
  {name: 'red shells', price: 50},
];

const saleProducts = products.map((product) => {
  if(product.price > 30){
    // Criar sempre um novo objeto caso for alterar algum valor, pois se alterar da forma abaixo acaba aletrando o array original.
    product.price = product.price / 2;
    return product;
    // return {name: product.name, price: product.price / 2}
  } else {
    return product;
  }
})
console.log(saleProducts, products);