// Add any additional interactivity or animations here
const activities = document.querySelectorAll('.activity');

activities.forEach(activity => {
    activity.addEventListener('click', () => {
        activities.forEach(a => a.classList.remove
