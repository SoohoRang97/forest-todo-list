const clock = document.querySelector("h2#clock");
const fullDate = document.querySelector("h4.clock__date");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const Minutes = String(date.getMinutes()).padStart(2, "0");
  const Seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours} : ${Minutes} : ${Seconds}`;
  fullDate.textContent = date.toDateString();
}
getClock();
setInterval(getClock, 1000);
