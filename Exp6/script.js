function analyzeText() {

    let email = document.getElementById("email").value.trim();
    let text = document.getElementById("text").value.trim();

    // Email Validation using RegEx
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (email === "" || text === "") {
        alert("Please fill all fields.");
        return;
    }

    let emailStatus = emailPattern.test(email);

    // String Functions
    let totalCharacters = text.length;

    let words = text.split(/\s+/).filter(word => word !== "");
    let totalWords = words.length;

    let upperCase = text.toUpperCase();

    let lowerCase = text.toLowerCase();

    // Data Extraction using RegEx
    let numbers = text.match(/\d+/g);

    let extractedNumbers = numbers ? numbers.join(", ") : "No Numbers Found";

    document.getElementById("output").innerHTML = `

    <h2>Analysis Result</h2>

    <hr><br>

    <b>Email Status :</b>

    ${emailStatus ? "Valid Email ✅" : "Invalid Email ❌"}

    <br><br>

    <b>Total Characters :</b>

    ${totalCharacters}

    <br><br>

    <b>Total Words :</b>

    ${totalWords}

    <br><br>

    <b>Upper Case :</b>

    ${upperCase}

    <br><br>

    <b>Lower Case :</b>

    ${lowerCase}

    <br><br>

    <b>Extracted Numbers :</b>

    ${extractedNumbers}

    `;

    console.log("Email:", email);

    console.log("Characters:", totalCharacters);

    console.warn("Analysis Completed");

    console.table({

        Email: email,

        Characters: totalCharacters,

        Words: totalWords,

        Numbers: extractedNumbers

    });

}
