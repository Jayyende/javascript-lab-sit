// Demonstration of var
var customerName = "";

// Demonstration of const
const GST = 0.18;

function generateBill(){

// Demonstration of let
let productName =
document.getElementById("productName").value;

let quantity =
parseInt(document.getElementById("quantity").value);

let price =
parseFloat(document.getElementById("price").value);

customerName =
document.getElementById("customerName").value;

// Validation

if(customerName=="" || productName=="" || isNaN(quantity) || isNaN(price))
{

alert("Please Fill All Fields");

return;

}

// Object

const customer={

name:customerName,

product:productName,

quantity:quantity,

price:price

};

// Destructuring

const{

name,

product,

quantity:q,

price:p

}=customer;

// Calculation

let subtotal=q*p;

let gstAmount=subtotal*GST;

let total=subtotal+gstAmount;

// Template Literals

document.getElementById("output").innerHTML=`

<h2>Customer Bill</h2>

<hr>

<b>Customer :</b> ${name}<br>

<b>Product :</b> ${product}<br>

<b>Quantity :</b> ${q}<br>

<b>Price :</b> ₹${p}<br>

<b>Subtotal :</b> ₹${subtotal.toFixed(2)}<br>

<b>GST (18%) :</b> ₹${gstAmount.toFixed(2)}<br>

<b>Total Amount :</b>

<font color="green">

₹${total.toFixed(2)}

</font>

`;

// Console Methods

console.log("Customer:",name);

console.log("Product:",product);

console.warn("GST Applied : 18%");

console.table(customer);

}
