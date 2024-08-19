// Select all buttons that should trigger pop-ups
const popupButtons = document.querySelectorAll("button[data-popup-id]");

// Add event listeners to open pop-ups
popupButtons.forEach(button => {
  button.addEventListener("click", function() {
    const popupId = this.dataset.popupId; // Get popup ID from data attribute
    const popup = document.getElementById(popupId);
    if (popup) {
      popup.style.display = "block"; // Show the popup
    }
  });
});

// Select all close buttons inside pop-ups
const closeButtons = document.querySelectorAll(".popup button");

closeButtons.forEach(closeButton => {
  closeButton.addEventListener("click", function() {
    const popup = this.closest(".popup"); // Find the closest popup to this button
    if (popup) {
      popup.style.display = "none"; // Hide the popup
    }
  });
});

// Select all close text elements inside pop-ups
const closeTexts = document.querySelectorAll(".close-popup");

closeTexts.forEach(closeText => {
  closeText.addEventListener("click", function() {
    console.log("Close button clicked");
    const popup = this.closest(".popup"); // Find the closest popup to this text
    if (popup) {
      popup.style.display = "none"; // Hide the popup
    }
  });
});
