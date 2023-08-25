let signup = document.querySelector(".signup")
let login = document.querySelector(".login")
let slider = document.querySelector(".slider")
let formSection = document.querySelector(".form-section")
const signup_btn = document.getElementById('signup-clkbtn')
const login_btn = document.getElementById('login-clkbtn')
const text = document.getElementById('text')
const signup_email = document.getElementById('signup-email')
const signup_password = document.getElementById('signup-password')
const confirm_password = document.getElementById('confirm-password')
const login_email = document.getElementById('login-email')
const login_password = document.getElementById('login-password')

// TODO
// Need to fix this avoiding alerts and add checking whether user in the database or not
login_btn.onclick = function () {
    if (!validateEmail(login_email.value)) {
        return alert("Неверный email")
    }
    if (login_email.value === "" || login_password.value === "") {
        return alert("Введите все поля")
    }
    window.location.href = 'client-session.html'
}
signup_btn.onclick = function () {
    if (!validateEmail(signup_email.value)) {
        return alert("Неверный email")
    }
    if (text.value === "" || signup_email.value === "" || signup_password.value === "" || confirm_password.value === "") {
        return alert("Введите все поля")
    }
    if (signup_password.value !== confirm_password.value) {
        return alert("Пароли не совпадают")
    }
    window.location.href = 'client-first-registration.html'
}

signup.addEventListener("click", () => {
    slider.classList.add("moveslider")
    formSection.classList.add("form-section-move")
});

login.addEventListener("click", () => {
    slider.classList.remove("moveslider")
    formSection.classList.remove("form-section-move")
});

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};