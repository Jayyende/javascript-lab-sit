// JSON API URL
const apiURL = "https://jsonplaceholder.typicode.com/users";


// Get HTML elements
const fetchBtn = document.getElementById("fetchBtn");
const jqueryBtn = document.getElementById("jqueryBtn");
const clearBtn = document.getElementById("clearBtn");

const tableBody = document.getElementById("userTableBody");
const message = document.getElementById("message");
const recordCount = document.getElementById("recordCount");


// Display data inside table
function displayUsers(users) {

    tableBody.innerHTML = "";

    if (users.length === 0) {

        tableBody.innerHTML = `
            <tr>
                <td colspan="6" class="empty">
                    No records found.
                </td>
            </tr>
        `;

        recordCount.textContent = "0 records found";

        return;
    }


    users.forEach(function (user) {

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${user.id}</td>

            <td>${user.name}</td>

            <td>${user.username}</td>

            <td>${user.email}</td>

            <td>${user.phone}</td>

            <td>${user.website}</td>
        `;

        tableBody.appendChild(row);

    });


    recordCount.textContent =
        users.length + " records loaded successfully.";
}



// --------------------------------------------------
// METHOD 1: Fetch API
// --------------------------------------------------

function loadUsingFetch() {

    message.textContent = "Loading JSON data using Fetch API...";

    message.style.background = "#fff3cd";

    message.style.color = "#856404";


    fetch(apiURL)

        .then(function (response) {

            if (!response.ok) {

                throw new Error("Network response was not successful.");

            }

            return response.json();

        })

        .then(function (data) {

            console.log("JSON data loaded using Fetch():");

            console.table(data);

            displayUsers(data);

            message.textContent =
                "✓ JSON data successfully loaded using Fetch()";

            message.style.background = "#d4edda";

            message.style.color = "#155724";

        })

        .catch(function (error) {

            console.error("Fetch Error:", error);

            message.textContent =
                "✗ Error loading JSON data using Fetch().";

            message.style.background = "#f8d7da";

            message.style.color = "#721c24";

        });

}



// --------------------------------------------------
// METHOD 2: jQuery $.getJSON()
// --------------------------------------------------

function loadUsingJQuery() {

    message.textContent =
        "Loading JSON data using jQuery $.getJSON()...";

    message.style.background = "#fff3cd";

    message.style.color = "#856404";


    $.getJSON(apiURL)

        .done(function (data) {

            console.log("JSON data loaded using jQuery $.getJSON():");

            console.table(data);

            displayUsers(data);

            message.textContent =
                "✓ JSON data successfully loaded using jQuery $.getJSON()";

            message.style.background = "#d4edda";

            message.style.color = "#155724";

        })

        .fail(function (error) {

            console.error("jQuery Error:", error);

            message.textContent =
                "✗ Error loading JSON data using jQuery.";

            message.style.background = "#f8d7da";

            message.style.color = "#721c24";

        });

}



// --------------------------------------------------
// Clear Table
// --------------------------------------------------

function clearTable() {

    tableBody.innerHTML = `
        <tr>
            <td colspan="6" class="empty">
                No JSON data loaded yet.
            </td>
        </tr>
    `;

    recordCount.textContent =
        "No records loaded";

    message.textContent =
        "Table cleared successfully.";

    message.style.background = "#d9edf7";

    message.style.color = "#145374";

}



// --------------------------------------------------
// Event Listeners
// --------------------------------------------------

fetchBtn.addEventListener("click", loadUsingFetch);

jqueryBtn.addEventListener("click", loadUsingJQuery);

clearBtn.addEventListener("click", clearTable);
