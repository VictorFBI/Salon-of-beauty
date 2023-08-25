let slider = document.querySelector('.slider')
const record = document.getElementById('record')
const history_log = document.getElementById('history-log')
let history_list = document.querySelector('.history-list')
let record_list = document.querySelector('.record-list')

record.onclick = function () {
    slider.classList.remove("moveslider")
    history_list.classList.remove("movehistorylist")
    record_list.classList.remove("moverecordlist")
}

history_log.onclick = function () {
    slider.classList.add("moveslider")
    history_list.classList.add("movehistorylist")
    record_list.classList.add("moverecordlist")
}

