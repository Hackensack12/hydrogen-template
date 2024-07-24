const taskbarButtons = document.querySelectorAll('.taskbar-button');
const portfolioContent = document.querySelectorAll('.portfolio-content > div');

taskbarButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const id = button.id.replace('-button', '-content');
        portfolioContent.forEach((content) => {
            content.classList.remove('active');
        });
        document.getElementById(id).classList.add('active');
    });
});