document.getElementById("noAvailabilityForm").style.visibility = "hidden";


// Get the modal
var modal = document.getElementById("eligibilityModal");

// Get the button that opens the modal
var eligibilityBtn = document.getElementById("eligibilityButton");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
eligibilityBtn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}