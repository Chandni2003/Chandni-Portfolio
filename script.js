// Interactive features (e.g., animations or dynamic content)
document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio loaded successfully!');
  });
 // JavaScript to handle the "Read More" button functionality
 document.getElementById('read-more-btn').addEventListener('click', function () {
  const readMoreContent = document.querySelectorAll('.read-more-content');
  readMoreContent.forEach(content => content.classList.toggle('d-none'));
  this.textContent = this.textContent === 'Read More' ? 'Show Less' : 'Read More';
});
document.addEventListener('DOMContentLoaded', () => {
  // Ensure the animation runs only once on page load or refresh
  const animatedText = document.querySelector('.animated-text');
  animatedText.classList.remove('initial');
  animatedText.classList.add('animated');
});
