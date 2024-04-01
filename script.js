// Load more posts
const loadMoreBtn = document.querySelector('.load-more button');
const postsSection = document.querySelector('.posts');

let currentPostIndex = 0;
const posts = [
    {
        image: 'post1.jpg',
        title: 'Coffee sugar chicory seasonal espresso barista americana',
        content: 'Aromatic french press americano in, acerbic turkish medium cup grounds froth. Brewed thick grounds aroma blue mountain chicory aromatic espresso.'
    },
    {
        image: 'post2.jpg',
        title: 'Overlaid the jeggers uselesslymuch excluding',
        content: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.'
    },
    // Add more post objects here
];

function addPostsToDOM(startIndex, endIndex) {
    for (let i = startIndex; i < endIndex; i++) {
        const post = posts[i];
        const postElement = document.createElement('
