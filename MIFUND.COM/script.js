// JavaScript code for handling button clicks
document.getElementById("donateBtn").addEventListener("click", function() {
  alert("Thank you for your donation!");
});

document.getElementById("requestBtn").addEventListener("click", function() {
  alert("Please fill out the submission parameters to request funding.");
});

document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();
  alert("Your message has been sent!");
  // You can add code here to send the form data to a server or perform other actions.
});