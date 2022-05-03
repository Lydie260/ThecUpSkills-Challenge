const item = [
    {name: 'Bike', price:100},
    {name: 'TV', price:200},
    {name: 'ALBUM', price:10},
    {name: 'BLOCK', price:5},
    {name: 'PHONE', price:500},
    {name: 'Computer', price:1000},




];
// cheap item

const min = Math.min(...item.map(product => product.price));
const cheapest = item.filter(product => product.price === min);

console.log(`the cheapest product is ${cheapest[0].name} with the price of ${expensive[0].price}dollars`);

// expensive item

const max = Math.max(...item.map(product => product.price));
const expensive = item.filter(product => product.price === max);

console.log(`The most expensive product is ${expensive[0].name} with the rice of ${expensive[0].price}dollars`);

  // total price of all items combined


let sum =0;
for (let i=0; i<item.length; i++){
    sum = sum + item[i].price;
}
console.log(`sum of price is ${sum}`);

  // total price combined excluding price < 10


const UnderTenProducts = item.filter((product) => {
    return product.price <10;
})
let add =0;
for (let i=0 ; i<UnderTenProducts.length; i++){
    add = + UnderTenProducts[i].price;
}
const addition = sum - add;
console.log(`full price of all products over 10 dollars price is ${addition}`);