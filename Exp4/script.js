// Function Declaration

function reverseString(text){

return text.split("").reverse().join("");

}

// Function Expression

const isPalindrome = function(text){

return text === reverseString(text);

};

// Closure Example

function messageGenerator(){

let appName = "Palindrome Checker";

return function(result){

return appName + " : " + result;

};

}

const displayMessage = messageGenerator();

// Arrow Function

const cleanText = (text) =>

text.toLowerCase().replace(/\s+/g,"");

// Main Function

function checkPalindrome(){

try{

let word =

document.getElementById("word").value;

if(word.trim()===""){

throw "Please Enter a Word";

}

let input = cleanText(word);

let result="";

if(isPalindrome(input)){

result="It is a Palindrome";

}

else{

result="It is NOT a Palindrome";

}

document.getElementById("output").innerHTML=`

<h2>Result</h2>

<hr><br>

<b>Entered Word :</b>

${word}

<br><br>

<b>Status :</b>

${result}

`;

console.log(word);

console.log(result);

console.warn("Program Executed Successfully");

console.table({

Word:word,

Result:result

});

}
catch(error){

alert(error);

}

}
