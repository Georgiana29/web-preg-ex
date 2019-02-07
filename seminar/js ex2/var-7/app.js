function applyDiscount(vehicles, discount){
    
    return new Promise((resolve,reject)=>{
       if(typeof discount !=='number'){
           reject(new Error('Invalid discount'))
       } 
       for(let vech of vehicles){
           if(!(typeof vech.make==='string')|| !(typeof vech.price==='number')){
                reject(new Error('Invalid array format'))
           }
       }
       var minP=Math.min.apply(Math, vehicles.map(function(veh){return veh.price}));
       if(discount<= minP/2){
          
                resolve(vehicles.map(veh=>{
                 return {
                     make:veh.make,
                     price:veh.price-discount
                 }
             }))
       }
       else{
           reject('Discount too big');
       }
    });
}

const app = {
    applyDiscount: applyDiscount
};

module.exports = app;
/*

# Having the `function applyDiscount(vehicles, discount)`, complete the following tasks:

- Function should return a Promise; (0.5 pts)
- If `discount` is not a number, the function should `reject` an `Error` with the message `Invalid discount`; (0.5 pts)
- `vehicles` is an array that contains objects with the following format: `{make: string, price: number}` (Example: [{make: "Audi A5", price: 15000}]). If an array with invalid objects is passed then the function should `reject` an `Error` with the message `Invalid array format`; (0.5 pts)
- Function should `reject` a `string` with the value `Discount too big` if `discount` is greater than 50% of the min price from `vehicles` array; (0.5 pts)
- Function should `resolve` an array with applied discount to each `vehicle price`; (0.5 pts)*/