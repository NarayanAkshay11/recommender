// Sidebar toggle
const sidebar = document.getElementById('sidebar');
const menuToggle = document.getElementById('menuToggle');

menuToggle.addEventListener('click', () => {
  sidebar.classList.toggle('sidebar-open');
});

// Search functionality
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const articles = document.querySelectorAll('article');

searchInput.addEventListener('input', () => {
  const searchTerm = searchInput.value.toLowerCase();
  articles.forEach(article => {
    const postTitle = article.querySelector('h2').textContent.toLowerCase();
    const postContent = article.querySelector('p').textContent.toLowerCase();
    if (postTitle.includes(searchTerm) || postContent.includes(searchTerm)) {
      article.style.display = 'flex';
    } else {
      article.style.display = 'none';
    }
  });
});

// Add smooth scrolling behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
