 **Products Cart Object**

- Given an input of products in the below format (Name Quantity Price)
- Input

```
["Rice", "Dal", "Salt"]
[2, 3, 1]
[60, 50, 20]

```

- Create an object with the key `data` which is an array of objects with the format `{name: "Rice", quantity: 2, price: 60}`
- The object must have a method called `total` which calculates the total values of items (multiplying quantity of each with its price)
- Sample output for the above case `290`


let data=[];
let name=["Rice", "Dal", "Salt"];
let quantity=[2, 3, 1];
let price=[60,50,20];


for(let i=0;i<name.length;i++){
  let obj={};
  obj.name=name[i];
  obj.quantity=quantity[i];
  obj.price=price[i];
  data.push(obj);
}
console.log(data)
