// Shopping Cart Array
let cart = [];

// Add Product
function addToCart(){

let product = document.getElementById("product").value.trim();

let price = parseFloat(document.getElementById("price").value);

let quantity = parseInt(document.getElementById("quantity").value);

// Validation

if(product==="" || isNaN(price) || isNaN(quantity)){

alert("Please Fill All Fields");

return;

}

// Object Handling

const item={

product,

price,

quantity

};

cart.push(item);

alert(product+" Added Successfully");

// Clear Fields

document.getElementById("product").value="";

document.getElementById("price").value="";

document.getElementById("quantity").value="";

}

// Calculate Bill

function calculateBill(){

if(cart.length===0){

alert("Cart is Empty");

return;

}

// Array Method (reduce)

let subtotal=cart.reduce(

(total,item)=>

total+(item.price*item.quantity),

0

);

// Discount Logic

let discount=0;

if(subtotal>=5000){

discount=subtotal*0.20;

}
else if(subtotal>=3000){

discount=subtotal*0.10;

}
else if(subtotal>=1000){

discount=subtotal*0.05;

}

let finalAmount=subtotal-discount;

let list="";

cart.forEach((item,index)=>{

list+=`${index+1}. ${item.product}
(₹${item.price} × ${item.quantity})<br>`;

});

document.getElementById("output").innerHTML=`

<h2>Shopping Bill</h2>

<hr><br>

${list}

<b>Subtotal :</b> ₹${subtotal.toFixed(2)}<br>

<b>Discount :</b> ₹${discount.toFixed(2)}<br>

<b>Total Amount :</b> ₹${finalAmount.toFixed(2)}

`;

console.log(cart);

console.warn("Bill Generated");

console.table(cart);

}
