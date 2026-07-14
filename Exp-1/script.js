function inlineMessage(){

alert("Inline JavaScript Executed!");

}

let name = prompt("Enter Your Name");

let prn = prompt("Enter Your PRN");

let branch = prompt("Enter Your Branch");

document.getElementById("welcome").innerHTML=

`
Welcome <b>${name}</b><br><br>

PRN : ${prn}<br>

Branch : ${branch}

`;

console.log("Student Name:",name);

console.warn("Warning Message");

console.error("Error Message");

console.table({

Name:name,

PRN:prn,

Branch:branch

});
