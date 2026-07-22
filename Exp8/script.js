function validateName(){

let name=document.getElementById("name").value;

let message="";

if(name.length<3){

message="Name must contain at least 3 characters.";

}

document.getElementById("nameError").innerHTML=message;

}

function validateAge(){

let age=document.getElementById("age").value;

let message="";

if(age<16 || age>60){

message="Age must be between 16 and 60.";

}

document.getElementById("ageError").innerHTML=message;

}

function validateEmail(){

let email=document.getElementById("email").value;

let pattern=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

let message="";

if(!pattern.test(email) && email!=""){

message="Invalid Email Address.";

}

document.getElementById("emailError").innerHTML=message;

}

function validateMobile(){

let mobile=document.getElementById("mobile").value;

let pattern=/^[0-9]{10}$/;

let message="";

if(!pattern.test(mobile) && mobile!=""){

message="Enter a valid 10-digit mobile number.";

}

document.getElementById("mobileError").innerHTML=message;

}

function submitForm(){

let name=document.getElementById("name").value;

let age=document.getElementById("age").value;

let email=document.getElementById("email").value;

let mobile=document.getElementById("mobile").value;

let membership=document.getElementById("membership").value;

if(name=="" || age=="" || email=="" || mobile==""){

alert("Please fill all fields.");

return;

}

document.getElementById("result").innerHTML=`

<h2>Admission Successful</h2>

<hr><br>

<b>Name :</b> ${name}<br>

<b>Age :</b> ${age}<br>

<b>Email :</b> ${email}<br>

<b>Mobile :</b> ${mobile}<br>

<b>Membership :</b> ${membership}

`;

console.log(name);
console.log(email);

console.warn("Gym Admission Completed");

console.table({

Name:name,

Age:age,

Email:email,

Mobile:mobile,

Membership:membership

});

}
