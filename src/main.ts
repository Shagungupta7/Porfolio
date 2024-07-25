import './style.scss';

document.addEventListener('DOMContentLoaded', () => {
  const interBubble: HTMLDivElement = document.querySelector<HTMLDivElement>('.interactive')!;
  const circleSize = 100; // Match this with the CSS size

  window.addEventListener('mousemove', (event: MouseEvent) => {
    const x = event.clientX;
    const y = event.clientY;
    
    const offsetX = circleSize / 2;
    const offsetY = circleSize / 2;

    interBubble.style.left = `${x - offsetX}px`;
    interBubble.style.top = `${y - offsetY}px`;
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const contentMap: { [key: string]: string } = {
    home: `<div class="bio">
               <p>Born in 2004 in New Delhi, India. I am a passionate computer science student pursuing a B.Tech in Computer Science (Data Science) at GL Bajaj Institute of Technology and Management. With a strong foundation in data structures, algorithms, and Java development, I thrive on solving complex problems and exploring new technologies. My journey in computer science is driven by a desire to learn continuously and innovate. Through various projects, I have gained practical experience and enjoy collaborating with others to create impactful solutions. I aim to leverage my skills to contribute to technological advancements and make a positive difference in the world.</p>
             </div>`,
    skills: `<div class="skills">
               <div class="skill">
                 <h3>Java</h3>
                 <div class="skill-bar">
                   <div class="skill-fill" style="width: 90%;"></div>
                 </div>
               </div>
               <div class="skill">
                 <h3>Python</h3>
                 <div class="skill-bar">
                   <div class="skill-fill" style="width: 70%;"></div>
                 </div>
               </div>
               <div class="skill">
                 <h3>C</h3>
                 <div class="skill-bar">
                   <div class="skill-fill" style="width: 80%;"></div>
                 </div>
               </div>
               <div class="skill">
                 <h3>HTML/CSS</h3>
                 <div class="skill-bar">
                   <div class="skill-fill" style="width: 80%;"></div>
                 </div>
               </div>
               <div class="skill">
                 <h3>JavaScript</h3>
                 <div class="skill-bar">
                   <div class="skill-fill" style="width: 60%;"></div>
                 </div>
               </div>
               <p>Here is a link to my <a href="https://drive.google.com/file/d/1TqpFzsGh06eIVgOKoB4eWEA0o1NXebPl/view?usp=drive_link" target="_blank">Resume</a></p>
             </div>`,
    projects: `<div class="projects">
               <h2>My Projects</h2>
               <div class="project-list">
                 <div class="project">
                   <h3>Gmail-clone</h3>
                   <a href="https://github.com/Shagungupta7/Gmail-clone" target="_blank">View Project</a>
                 </div>
             </div>`,
    contact: `<div class="contact">
                <h2>Contact Me</h2>
                <div class="contact-links">
                  <a href="https://github.com/Shagungupta7" target="_blank" class="contact-link">
                    <i class="fab fa-github"></i> GitHub
                  </a>
                  <a href="https://www.linkedin.com/in/shagun-gupta777" target="_blank" class="contact-link">
                    <i class="fab fa-linkedin"></i> LinkedIn
                  </a>
                  <a class="contact-link"><i class="fas fa-envelope"></i> shagungupta0307@gmail.com</a>
                </div>
              </div>`
  };

  const contentDiv = document.getElementById('content') as HTMLDivElement;

  const updateContent = (key: string) => {
    if (contentMap[key]) {
      contentDiv.innerHTML = contentMap[key];
    }
  };

  updateContent('home');

  document.querySelectorAll('ul li a').forEach(link => {
    link.addEventListener('click', (event: Event) => {
      event.preventDefault();

      document.querySelectorAll('ul li a').forEach(link => {
        link.classList.remove('active');
      });

      const target = event.target as HTMLElement;
      target.classList.add('active');

      const contentKey = target.getAttribute('data-content');
      if (contentKey) {
        updateContent(contentKey);
      }
    });
  });
});


