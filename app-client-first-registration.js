const continue_btn = document.getElementById('continue')
const age = document.getElementById('age')
const skin = document.getElementById('skin')
const sensitivity = document.getElementById('sensitivity')
const constraints = document.getElementById('constraints')
const allergies = document.getElementById('allergies')

continue_btn.onclick = function ()  {

    if(age.value === "" || skin.value === "" || sensitivity.value === "" || constraints.value === "" || allergies.value === "") {
        return alert("Введите все поля")
    }

    if(age.value < 6 || age.value > 100) { // potentially needed to be modified
        age.value = ""
        return alert("Введите настоящий возраст")
    }

     window.location.href = "client-session.html"
}