let points = parseInt(localStorage.getItem("points")) || 0;
let songsToday = parseInt(localStorage.getItem("songsToday")) || 0;
let totalSongs = parseInt(localStorage.getItem("totalSongs")) || 0;
const lastCheckInDate = localStorage.getItem("lastCheckInDate");

function isNewDay() {
  const currentDate = new Date().toLocaleDateString();
  return lastCheckInDate !== currentDate;
}

function updatePointsAndSongs() {
  points += 10;
  songsToday += 1;
  totalSongs += 1;

  localStorage.setItem("points", points);
  localStorage.setItem("songsToday", songsToday);
  localStorage.setItem("totalSongs", totalSongs);

  const today = new Date().toLocaleDateString();
  localStorage.setItem("lastCheckInDate", today);

  document.getElementById("points").textContent = points;
  document.getElementById("songsToday").textContent = songsToday;
  document.getElementById("totalSongs").textContent = totalSongs;
  document.getElementById("message").textContent =
    "Bạn đã điểm danh và được cộng 10 điểm!";
}

function exchangePointsToSOL() {
  const conversionRate = 0.01;
  const minPointsForExchange = 100;

  if (points >= minPointsForExchange) {
    const solAmount = (points / 100) * conversionRate;
    points = 0; 

    localStorage.setItem("points", points);
    document.getElementById("points").textContent = points;

    document.getElementById("message").textContent = `Bạn đã đổi ${solAmount.toFixed(
      4
    )} SOL từ điểm của mình!`;
  } else {
    document.getElementById("message").textContent =
      "Bạn cần ít nhất 100 điểm để đổi ra SOL!";
  }
}

document.getElementById("checkInButton").addEventListener("click", () => {
  if (isNewDay()) {
    songsToday = 0;
    localStorage.setItem("songsToday", songsToday);

    updatePointsAndSongs();
  } else {
    updatePointsAndSongs();
    document.getElementById("message").textContent =
      "Bạn đã điểm danh hôm nay rồi!";
  }
});

document.getElementById("exchangeButton").addEventListener("click", exchangePointsToSOL);

document.getElementById("points").textContent = points;
document.getElementById("songsToday").textContent = songsToday;
document.getElementById("totalSongs").textContent = totalSongs;
