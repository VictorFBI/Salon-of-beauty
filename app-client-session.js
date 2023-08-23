let slider = document.querySelector('.slider')
const record = document.getElementById('record')
const history_log = document.getElementById('history-log')

record.onclick = function () {
    slider.classList.remove("moveslider")
}

history_log.onclick = function () {
    slider.classList.add("moveslider")
}