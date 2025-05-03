document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.carousel-image');
  let current = 0;

  function showImage(index) {
    images.forEach((img, i) => {
      img.classList.remove('active'); // Remove 'active' class from all
      if (i === index) {
        img.classList.add('active'); // Add 'active' to the current one
      }
    });
  }

  document.getElementById('prev').addEventListener('click', () => {
    current = (current - 1 + images.length) % images.length;
    showImage(current);
  });

  document.getElementById('next').addEventListener('click', () => {
    current = (current + 1) % images.length;
    showImage(current);
  });

  // Initialize the first image
  showImage(current);
});

document.getElementById('scrollToTop').addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

function showSidebar() {
  const sidebar = document.querySelector('.sidebar-links');
  sidebar.style.display = 'flex';
}
function hideSidebar() {
  const sidebar = document.querySelector('.sidebar-links');
  sidebar.style.display = 'none';
}

