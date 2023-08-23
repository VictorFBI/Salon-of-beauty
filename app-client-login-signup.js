let signup = document.querySelector(".signup")
let login = document.querySelector(".login")
let slider = document.querySelector(".slider")
let formSection = document.querySelector(".form-section")
const signup_btn = document.getElementById('signup-clkbtn')

signup_btn.onclick = function () {
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