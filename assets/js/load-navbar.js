// Load navbar component
document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('header') || document.body;
  
  fetch('navbar.html')
    .then(response => response.text())
    .then(data => {
      header.innerHTML = data + header.innerHTML;
    })
    .catch(error => console.error('Error loading navbar:', error));
});
