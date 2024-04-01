const toggleBtn = document.querySelector('.toggle-btn');
const sidebar = document.querySelector('.sidebar');

toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
});

// Example function to dynamically add blog posts
function addBlogPost(title, content) {
    const blogPostsContainer = document.querySelector('.blog-posts');
    const blogPost = document.createElement('div');
    blogPost.classList.add('blog-post');

    const blogTitle = document.createElement('h2');
    blogTitle.textContent = title;

    const blogContent = document.createElement('p');
    blogContent.textContent = content;

    blogPost.appendChild(blogTitle);
    blogPost.appendChild(blogContent);

    blogPostsContainer.appendChild(blogPost);
}

// Example usage
addBlogPost('My First Blog Post', 'This is the content of my first blog post.');
addBlogPost('Another Blog Post', 'Here is the content of another blog post.');
