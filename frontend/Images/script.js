// If you want to add functionality using JavaScript, for example, loading images dynamically or handling interactions, you can do it here.
// For instance, you can change the image source dynamically or add event listeners to the images.
// For demonstration purposes, let's change the image source on click.

const images = document.querySelectorAll('.grid-item img');

images.forEach(img => {
  img.addEventListener('click', function() {
    // Change the image source on click
    if (img.src.includes('image1.jpg')) {
      img.src = 'new_image1.jpg';
    } else {
      img.src = 'image1.jpg';
    }
  });
});
