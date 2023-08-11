const numbers = [45, 65, 23, 98, 19];
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    console.log(number);
}


// for of
for (const number of numbers) {
    console.log(number);
}


const products = [
    { id: 1, name: 'xiomi phone', price: 19000 },
    { id: 2, name: 'iphone phone', price: 190000 },
    { id: 3, name: 'tecno phone', price: 24000 },
    { id: 4, name: 'nokia phone', price: 20000 },
    { id: 5, name: 'samsung phone', price: 66000 },
    { id: 6, name: 'oppo phone', price: 34000 },
    { id: 7, name: 'vivo phone', price: 54000 },
    { id: 8, name: 'redmi phone', price: 22000 }
];

/* 
for (const product of products) {
    console.log(product);
} 
*/


function matchProducts(products, search) {
    const matched = [];
    for (const product of products) {
        if (product.name.toLowerCase().includes(search.toLowerCase())) {
            matched.push(product);
        }
    }
    return matched;
}

const result = matchProducts(products, 'phone');
console.log(result);