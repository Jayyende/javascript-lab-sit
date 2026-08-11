// ==========================================
// Experiment 9
// localStorage and sessionStorage
// Theme Preference Manager
// ==========================================


// Get required HTML elements

const lightBtn = document.getElementById("lightBtn");

const darkBtn = document.getElementById("darkBtn");

const blueBtn = document.getElementById("blueBtn");

const clearLocalBtn =
    document.getElementById("clearLocalBtn");

const clearSessionBtn =
    document.getElementById("clearSessionBtn");

const localStorageValue =
    document.getElementById("localStorageValue");

const sessionStorageValue =
    document.getElementById("sessionStorageValue");

const message =
    document.getElementById("message");


// ==========================================
// Function to display message
// ==========================================

function showMessage(text) {

    message.textContent = text;

    message.style.display = "block";

    setTimeout(function () {

        message.style.display = "none";

    }, 2500);
}


// ==========================================
// Function to apply theme
// ==========================================

function applyTheme(theme) {

    // Remove previous theme classes

    document.body.classList.remove(
        "dark",
        "blue"
    );


    // Apply selected theme

    if (theme === "dark") {

        document.body.classList.add("dark");

    }

    else if (theme === "blue") {

        document.body.classList.add("blue");

    }


    // Update localStorage information

    updateStorageDisplay();
}


// ==========================================
// Save theme in localStorage
// ==========================================

function saveTheme(theme) {

    localStorage.setItem(
        "selectedTheme",
        theme
    );


    // Also store session information

    sessionStorage.setItem(
        "currentSession",
        "Active"
    );


    applyTheme(theme);


    showMessage(
        "Theme saved successfully!"
    );


    console.log(
        "Theme saved in localStorage:",
        theme
    );

}


// ==========================================
// Light Theme Button
// ==========================================

lightBtn.addEventListener(
    "click",
    function () {

        saveTheme("light");

    }
);


// ==========================================
// Dark Theme Button
// ==========================================

darkBtn.addEventListener(
    "click",
    function () {

        saveTheme("dark");

    }
);


// ==========================================
// Blue Theme Button
// ==========================================

blueBtn.addEventListener(
    "click",
    function () {

        saveTheme("blue");

    }
);


// ==========================================
// Clear localStorage
// ==========================================

clearLocalBtn.addEventListener(
    "click",
    function () {

        localStorage.removeItem(
            "selectedTheme"
        );


        applyTheme("light");


        showMessage(
            "Saved theme has been cleared."
        );


        console.log(
            "localStorage cleared."
        );

    }
);


// ==========================================
// Clear sessionStorage
// ==========================================

clearSessionBtn.addEventListener(
    "click",
    function () {

        sessionStorage.clear();


        updateStorageDisplay();


        showMessage(
            "Session storage cleared."
        );


        console.log(
            "sessionStorage cleared."
        );

    }
);


// ==========================================
// Update storage information
// ==========================================

function updateStorageDisplay() {

    const savedTheme =
        localStorage.getItem(
            "selectedTheme"
        );


    const sessionStatus =
        sessionStorage.getItem(
            "currentSession"
        );


    if (savedTheme) {

        localStorageValue.textContent =
            savedTheme;

    }

    else {

        localStorageValue.textContent =
            "No theme saved";

    }


    if (sessionStatus) {

        sessionStorageValue.textContent =
            sessionStatus;

    }

    else {

        sessionStorageValue.textContent =
            "No session data";

    }

}


// ==========================================
// Load saved theme when page opens
// ==========================================

function loadSavedTheme() {

    const savedTheme =
        localStorage.getItem(
            "selectedTheme"
        );


    // Create session data

    if (!sessionStorage.getItem("currentSession")) {

        sessionStorage.setItem(
            "currentSession",
            "Active"
        );

    }


    if (savedTheme) {

        applyTheme(savedTheme);

    }

    else {

        applyTheme("light");

    }


    updateStorageDisplay();

}


// ==========================================
// Run when page loads
// ==========================================

loadSavedTheme();


// ==========================================
// Console information
// ==========================================

console.log(
    "Experiment 9: localStorage and sessionStorage"
);

console.log(
    "Current Theme:",
    localStorage.getItem("selectedTheme")
);

console.log(
    "Session Status:",
    sessionStorage.getItem("currentSession")
);
