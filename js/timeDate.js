function time() {
    document.getElementById('time-date').innerText = Date()
}

setInterval(time, 1000)