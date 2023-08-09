// Get the navigation element
var navigation = document.querySelector('.navigation');

// Get the offset position of the navigation
var navOffset = navigation.offsetTop;

// Function to update the navigation's position
function updateNavigationPosition() {
  if (window.pageYOffset >= navOffset) {
    navigation.style.top = '0';
  } else {
    navigation.style.top = '-50px'; /* Adjust this value based on your navigation's height */
  }
}

// Add an event listener to the "scroll" event
window.addEventListener('scroll', updateNavigationPosition);

