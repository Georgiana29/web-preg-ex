function applyBlackFriday(products, discount){
    return new Promise((resolve, reject) => {
        if(typeof discount !== "number")
            reject(new Error("Invalid discount"));
        if(products.filter(product => !(typeof product.name === "string" &&
            typeof product.price === "number")).length)
            reject(new Error("Invalid array format"));
        if(discount > 0 && discount <= 10){
            resolve(products.map(product => {
                let val = product.price * discount / 100;
                return { name:product.name,
                        price: product.price - val
                }
            }))
        } else {
            reject(new Error("Discount not applicable"));
        }
    });
}

const app = {
    applyBlackFriday: applyBlackFriday
};
module.exports = app;
/*
# Subject 2 (2.5 pts)
# TOPIC: Javascript

# Having the `function applyBlackFriday(products, discount)` where:
- `products` is an array of objects with the following format {name: string, price: number};
- `discount` is a number that represents the percentage of discount to apply to the products price.
- The function should return an array with applied discount to each product

# Complete the following tasks:

- Function should return a promise; (0.5 pts)
- `discount` should be a number, otherwise `reject` the promise with an `Error` with the message `Invalid discount`; (0.5 pts)
- `discount` should be greater than 0 and less equals than 10, otherwise `reject` the promise with an `Error` with the message `Discount not applicable`; (0.5 pts)
- `products` should contain elements in the specified format, otherwise `reject` an `Error` with the message `Invalid array format`; (0.5 pts)
- Function should return the new array with the discounted products prices; (0.5 pts)*/