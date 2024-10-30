
function changeAboutMeText()
{
    const aboutMetext = [" IT student" , " SVCE student" , " college student"];
    const typingspeed = 100;
    const erasespeed = 50;
    const pausespeed = 1500;
    const aboutMeElement = document.querySelector('.about-me');

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type(){
        const currentText = aboutMetext[textIndex]
        if(!isDeleting && charIndex < currentText.length){
            aboutMeElement.textContent += currentText[charIndex];
            charIndex++;
            setTimeout(type , typingspeed);
        }
        else if(isDeleting && charIndex > 0){
            aboutMeElement.textContent = currentText.substring(0 , charIndex-1);
            charIndex--;
            setTimeout(type , erasespeed);
        }
        else{
            isDeleting = !isDeleting;
            if(!isDeleting){
                textIndex = (textIndex+1) % aboutMetext.length;
            }
            setTimeout(type,pausespeed);
        }
    }
    type();
}
document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;

    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        const currentMode = body.classList.contains('dark-mode') ? 'Dark' : 'Light';
        darkModeToggle.querySelector('i').classList.toggle('fa-sun'); // Change icon
        darkModeToggle.querySelector('i').classList.toggle('fa-moon'); // Change icon
        darkModeToggle.querySelector('i').classList.toggle('light-mode'); // Change icon color
    });
});
changeAboutMeText();

document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target.querySelector('.progress-bar');
                const progress = progressBar.dataset.progress;
                
                progressBar.style.setProperty('--progress', `${progress}%`); // Set custom property for progress
                progressBar.classList.add('animated'); // Add a class to trigger animation
                observer.unobserve(entry.target); // Stop observing once animation is triggered
            }
        });
    });

    const programmingLanguages = document.querySelectorAll('#programming-languages .skill');
    programmingLanguages.forEach(skill => {
        observer.observe(skill);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
});
