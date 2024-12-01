// Get all LEDs
const leds = document.querySelectorAll(".led");

// Function to toggle LEDs on and off
function toggleLEDs() {
  leds.forEach((led, index) => {
    setTimeout(() => {
      led.classList.toggle("on");
    }, index * 300); // Delay each LED toggle
  });
}

// Repeat the toggle function every 2 seconds
setInterval(toggleLEDs, 2000);
