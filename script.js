// ================= THEME TOGGLE =================

function toggleTheme() {

    document.body.classList.toggle("dark");

    const button =
        document.getElementById("themeButton");


    if (document.body.classList.contains("dark")) {

        button.innerHTML = "☀️ Light Mode";

    } else {

        button.innerHTML = "🌙 Dark Mode";

    }

}


// ================= CONTACT FORM =================

function sendMessage(event) {

    event.preventDefault();


    const name =
        document.getElementById("name").value;


    alert(
        "Thank you, " +
        name +
        "! Your message has been sent successfully. 😊"
    );


    document.getElementById("name").value = "";

    document.getElementById("email").value = "";

    document.getElementById("message").value = "";

}
