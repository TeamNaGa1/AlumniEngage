function formValidation() {
    var fn = document.registration.fname;
    var ln = document.registration.lname;
    var gender = document.registration.gen;
    var number = document.registration.num;
    var address = document.registration.add;
    var zip = document.registration.pin;
    var male = document.registration.msex;
    var famale = document.registration.fsex;
    var passout = document.registration.pass;
    var states = document.registration.state;
    var url = document.registration.email;
    var password = document.registration.passw;

    {
        if (ValidateEmail(email)) {

            if (password_validation(password, 7, 12, @))
        }
    }
    return false;
}


function password_validation(password, mx, my) {
    var password_len = password.value.length;
    if (password_len == 0 || password_len >= my || password_len < mx) {
        alert("Password should not be empty / length be between " + mx + " to " + my);
        password.focus();
        return false;
    }
    return true;
}

function ValidateEmail(email) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.value.match(mailformat)) {
        return true;
    } else {
        alert("You have entered an invalid email address!");
        email.focus();
        return false;
    }
}

const button = document.getElementById('myButton');

button.addEventListener('click', () => {
    window.location.href = 'https://www.example.com';
});

function reg() {
    (alert("successfull registration!!!"));
}