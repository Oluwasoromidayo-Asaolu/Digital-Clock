function calculateTime(){
    let date = new Date();
    let dayNumber = date.getDay();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    let actualDay = days[dayNumber];
    minutes = minutes < 10 ? '0' + minutes : minutes;
    hour = hour < 10 ? '0' + hour : hour;
    let period = hour > 12 ? 'PM' : 'AM';
    document.getElementById('dateContent').innerHTML = `${actualDay} ${hour} | ${minutes} | ${period}`
    setTimeout(calculateTime, 200);
}
window.addEventListener('load', calculateTime);
