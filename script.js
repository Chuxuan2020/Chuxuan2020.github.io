// Get the navigation element
var navigation = document.querySelector('.navigation');

// Get the offset position of the navigation
var navOffset = navigation.offsetTop;

// Function to add or remove the "sticky" class
function stickyNavigation() {
  if (window.pageYOffset >= navOffset) {
    navigation.classList.add('sticky');
  } else {
    navigation.classList.remove('sticky');
  }
}

// Add an event listener to the "scroll" event
window.addEventListener('scroll', stickyNavigation);
