// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
  // Get references to HTML elements
  const slides = document.getElementsByClassName('slide');
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');
  
  // Initialize slide index
  let slideIndex = 0;
  
  // Add event listeners to the previous and next buttons
  prevButton.addEventListener('click', function() {
    changeSlide(-1);
  });
  
  nextButton.addEventListener('click', function() {
    changeSlide(1);
  });
  
  // Function to change the current slide
  function changeSlide(n) {
    showSlide(slideIndex += n);
  }
  
  // Function to display the current slide
  function showSlide(n) {
    if (n >= slides.length) {
      slideIndex = 0;
    }
    if (n < 0) {
      slideIndex = slides.length - 1;
    }
  
    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
      slides[i].classList.remove('active');
    }
  
    // Display the current slide
    slides[slideIndex].classList.add('active');
  }
  
  // Show the first slide when the page loads
  showSlide(0);
});