
const countdownDate = new Date("July 25, 2023 00:00:00").getTime();


const countdownTimer = setInterval(function() {
  
  const now = new Date().getTime();

  
  const distance = countdownDate - now;

  
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  
  document.getElementById("days").textContent = formatTime(days);
  document.getElementById("hours").textContent = formatTime(hours);
  document.getElementById("minutes").textContent = formatTime(minutes);
  document.getElementById("seconds").textContent = formatTime(seconds);

  
  if (distance < 0) {
    clearInterval(countdownTimer);
  }
}, 1000);


function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}




