
// Define the target date for your countdown
const targetDate = new Date("2024-2-2 00:00:00").getTime();

// Function to update the countdown
function updateCountdown() {
  const currentDate = new Date().getTime();
  const timeRemaining = targetDate - currentDate;

  const seconds = Math.floor((timeRemaining / 1000) % 60);
  const minutes = Math.floor((timeRemaining / 1000 / 60) % 60);
  const hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));

  // Update your HTML elements with the countdown values
  document.querySelector('.days').textContent = days;
  document.querySelector('.hours').textContent = hours;
  document.querySelector('.minutes').textContent = minutes;
  document.querySelector('.seconds').textContent = seconds;

  if (timeRemaining <= 0) {
    // Countdown has ended, you can take appropriate action here
    clearInterval(interval);
  }
}

// Update the countdown initially
updateCountdown();

// Update the countdown every second
const interval = setInterval(updateCountdown, 1000);

