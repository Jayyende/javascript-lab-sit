$(document).ready(function () {

    // Validate Button
    $("#validateBtn").click(function () {
        validateMobile();
    });

    // Reset Button
    $("#resetBtn").click(function () {

        $("#mobile").val("");

        $("#result").html("");

        $("#dashboard").hide();

        $("#mobile")
            .removeClass("valid")
            .removeClass("invalid");

        $("#status").text("-");
        $("#operator").text("-");
        $("#time").text("-");

        console.clear();

    });

    // Live Validation
    $("#mobile").on("input", function () {

        // Allow only digits
        this.value = this.value.replace(/\D/g, "");

        // Maximum 10 digits
        this.value = this.value.slice(0,10);

        if(this.value.length>0){

            validateMobile();

        }
        else{

            $("#result").html("");

            $("#dashboard").hide();

            $("#mobile")
            .removeClass("valid")
            .removeClass("invalid");

        }

    });

});


// Main Validation Function

function validateMobile(){

    let mobile=$("#mobile").val();

    let regex=/^[6-9]\d{9}$/;

    let operator="Unknown";

    if(mobile.startsWith("98") || mobile.startsWith("99")){

        operator="Airtel";

    }

    else if(mobile.startsWith("97") || mobile.startsWith("96")){

        operator="Vi";

    }

    else if(mobile.startsWith("95") || mobile.startsWith("94")){

        operator="BSNL";

    }

    else if(mobile.startsWith("91") || mobile.startsWith("92") || mobile.startsWith("93")){

        operator="Jio";

    }

    else if(mobile.startsWith("90") || mobile.startsWith("89")){

        operator="Reliance";

    }

    let currentTime=new Date().toLocaleString();

    if(regex.test(mobile)){

        $("#mobile")
        .removeClass("invalid")
        .addClass("valid");

        $("#result").html("✅ Valid Indian Mobile Number");

        $("#result")
        .removeClass("error")
        .addClass("success");

        $("#status").html("✅ Valid");

        $("#operator").text(operator);

        $("#time").text(currentTime);

        $("#dashboard").fadeIn();

        console.clear();

        console.table({

            "Mobile Number":mobile,

            "Status":"VALID",

            "Operator":operator,

            "Country":"India (+91)",

            "Validation":"Regex + jQuery",

            "Validated At":currentTime

        });

    }

    else{

        $("#mobile")
        .removeClass("valid")
        .addClass("invalid")
        .addClass("shake");

        setTimeout(function(){

            $("#mobile").removeClass("shake");

        },500);

        $("#result").html("❌ Invalid Indian Mobile Number");

        $("#result")
        .removeClass("success")
        .addClass("error");

        $("#status").html("❌ Invalid");

        $("#operator").text("-");

        $("#time").text(currentTime);

        $("#dashboard").fadeIn();

        console.clear();

        console.table({

            "Mobile Number":mobile,

            "Status":"INVALID",

            "Operator":"Unknown",

            "Country":"India (+91)",

            "Validation":"Regex + jQuery",

            "Validated At":currentTime

        });

    }

}
