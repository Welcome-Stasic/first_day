window.onload = function () {
  let progressBar = document.getElementById('progress');
  let percentageElement = document.getElementById('percentage');
  let loaderContainer = document.getElementById('loaderContainer');
  let content = document.getElementById('content');
  let progress = 0;

  let interval = setInterval(() => {
    progress += 1;
    percentageElement.textContent = `${progress}%`;
    progressBar.style.width = `${progress}%`;

    if (progress === 100) {
      clearInterval(interval);

      setTimeout(() => {
        loaderContainer.style.transition = 'opacity 1s ease-out';
        loaderContainer.style.opacity = 0;

        setTimeout(() => {
          loaderContainer.style.display = 'none';
          content.style.display = 'block';
        }, 1000);
      }, 200);
    }
  }, 40);
};


const skillsButton = document.getElementById('skills');
const skillsSection = document.querySelector('.skills-section');

skillsButton.addEventListener('click', () => {
  skillsSection.classList.toggle('open');
  if (skillsSection.classList.contains('open')) {
    skillsSection.scrollIntoView({
      behavior: 'smooth',
      block: '.skills-section'
    });
  } else {
    document.body.scrollIntoView({
        behavior: 'smooth',
        block: '.skills-section'
    });
  }
});
