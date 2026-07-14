function calculateGrade(){

    let studentName = document.getElementById("studentName").value.trim();
    let prn = document.getElementById("prn").value.trim();
    let marks = parseFloat(document.getElementById("marks").value);

    // Form Validation
    if(studentName === "" || prn === "" || isNaN(marks)){
        alert("Please fill all fields.");
        return;
    }

    if(marks < 0 || marks > 100){
        alert("Marks must be between 0 and 100.");
        return;
    }

    let grade = "";
    let remark = "";

    // Control Structures
    if(marks >= 90){
        grade = "A+";
        remark = "Outstanding";
    }
    else if(marks >= 80){
        grade = "A";
        remark = "Excellent";
    }
    else if(marks >= 70){
        grade = "B";
        remark = "Very Good";
    }
    else if(marks >= 60){
        grade = "C";
        remark = "Good";
    }
    else if(marks >= 50){
        grade = "D";
        remark = "Pass";
    }
    else{
        grade = "F";
        remark = "Fail";
    }

    document.getElementById("result").innerHTML = `
        <h2>Student Result</h2>
        <hr><br>

        <b>Name :</b> ${studentName}<br>
        <b>PRN :</b> ${prn}<br>
        <b>Marks :</b> ${marks}<br>
        <b>Grade :</b> ${grade}<br>
        <b>Remark :</b> ${remark}
    `;

    console.log("Student:", studentName);
    console.log("Marks:", marks);
    console.log("Grade:", grade);

    console.warn("Grade Generated Successfully");

    console.table({
        Name: studentName,
        PRN: prn,
        Marks: marks,
        Grade: grade,
        Remark: remark
    });
}
