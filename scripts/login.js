function booked() {
    username = document.getElementById("name").value;
    email = document.getElementById("email").value;

    if (username, email == "") {
        document.getElementById("spark").innerHTML = "Invalid details";
    } else {
        localStorage.setItem("username", username);
        localStorage.setItem("useremail", email);
        window.location = "home.html";
    }
}

function mail() {
    window.open("mailto:teamprovid@gmail.com?Subject=Contact Support");
}