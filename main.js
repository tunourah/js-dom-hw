const myName = document.getElementById('my-name');
const myTitle = document.getElementById('my-title');
const myParagraph = document.getElementById('my-paragraph');
const experienceCompany = document.getElementById('experience-company'); // Corrected typo
const leftSection = document.getElementsByClassName('left-section')[0];
const myImage = document.getElementsByTagName('img')[0];
const contactSection = document.getElementById('contactSection');
const educationSection = document.getElementById('educationSection');

// Right section

function changeName() {
    myName.innerHTML = "<span class='name-style'>Nora</span> Altuwaim ✨";
}
function changeNameBack() {
    myName.innerHTML = "<span class='name-style'>RICHARD</span> SANCHEZ";
    myName.classList.add('secone-name');
    myName.classList.remove('my-name-style');
}

myName.addEventListener('mouseover', changeName);
myName.addEventListener('mouseout', changeNameBack);

myTitle.onmouseover = function() {
    myTitle.innerHTML = "<span class='border-bottom border-4 border-primary'>Web</span> Developer 🚀";}

myTitle.onmouseout = function() {
    myTitle.innerHTML = "<span class='border-bottom border-4 border-primary'>Marke</span>ting Manager";
    
}

// Profile section
myParagraph.onmouseover = function () {
    myParagraph.innerHTML = "<i class='fas fa-laptop-code'></i> I am a Web Developer with a passion for creating beautiful and responsive websites. I have experience in HTML, CSS, JavaScript, and React. I am also skilled in project management and public relations.";
    myParagraph.classList.add('card');
}


myParagraph.onmouseout = function () {
    myParagraph.classList.remove('card');
    myParagraph.textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation.`;
}

// Experience section
document.getElementById('experienceSection').onmouseover = function() {
    document.getElementById('experience1').style.display = 'none';
    document.getElementById('experience2').style.display = 'none';
    document.getElementById('experience3').style.display = 'none';
    document.getElementById('experience4').style.display = 'block';
    document.getElementById('experience4').classList = 'card';
    document.getElementById('experience4-description').style.display = 'block';
    document.getElementById('experience4-bullets').style.display = 'block';
};

document.getElementById('experienceSection').onmouseout = function() {
    document.getElementById('experience1').style.display = 'block';
    document.getElementById('experience2').style.display = 'block';
    document.getElementById('experience3').style.display = 'block';
    document.getElementById('experience4').style.display = 'none';
    document.getElementById('experience4-description').style.display = 'none';
    document.getElementById('experience4-bullets').style.display = 'none';
};

// Reference section
document.getElementById('referenceSection').onmouseover = function() {
    referenceSection.style.display = 'none';
    document.getElementById('project').style.display = 'block';
    document.getElementById('project-description').classList = 'card';
}
document.getElementById('referenceSection').onmouseout = function() {
    this.style.display = 'block';
    document.getElementById('project').style.display = 'none';


}





// Left section

function addHoverClass() {
    leftSection.classList.add('left-section-hover');
}

function removeHoverClass() {
    leftSection.classList.remove('left-section-hover');
}

leftSection.onmouseover = addHoverClass;
leftSection.onmouseout = removeHoverClass;

function changeImage() {
    myImage.src = "https://tunora.netlify.app/assets/IMG_7254-removebg-preview.png";
    myImage.style.border = "none";
}

function backImage() {
    myImage.src = "https://amcdmcslc.com/cdn/shop/articles/The-Best-Harvey-Specter-Quotes.jpg?v=1669820579";
    myImage.style.border = "4px solid #fff";
}

myImage.onmouseover = changeImage;
myImage.onmouseout = backImage;

contactSection.onmouseout = function() {
    document.getElementById('phone').innerHTML = '<i class="bi bi-telephone"></i> +123-456-7890';
    document.getElementById('email').innerHTML = '<i class="bi bi-envelope"></i> hello@reallygreatsite.com';
    document.getElementById('address').innerHTML = '<i class="bi bi-geo-alt"></i> 123 Anywhere St., Any City';
    document.getElementById('website').innerHTML = '<i class="bi bi-globe"></i> www.reallygreatsite.com';
};
contactSection.onmouseover = function() {
    document.getElementById('phone').innerHTML = '<i class="bi bi-telephone"></i> +966 5058529400';
    document.getElementById('email').innerHTML = '<i class="bi bi-envelope"></i> nourahaltuaim@gmail.com';
    document.getElementById('address').innerHTML = '<i class="bi bi-geo-alt"></i> Riyadh City';
    document.getElementById('website').innerHTML = '<i class="bi bi-globe"></i> www.tunora.netlify.app';
};

// Education section

educationSection.onmouseover = function() {
    document.getElementById('masters').textContent = '';
    document.getElementById('bachelors').innerHTML = '2020 - 2024<br /> <strong> <i>Prince Sattam bin Abdulaziz University 🌟<i> </strong> <br /> Bachelor of Software Engineering  <br /> GPA: 🤖 / 5.0';
};

educationSection.onmouseout = function() {
    document.getElementById('masters').innerHTML = `2029 - 2030<br />Wardiere University<br />Master of Business Management`;
    document.getElementById('bachelors').innerHTML = `2025 - 2029<br />Wardiere University<br />Bachelor of Business<br />GPA: 3.8 / 4.0`;
};

// Select the skills and languages sections
const skillsSection = document.getElementById('skillsSection');
const languagesSection = document.getElementById('languagesSection');

// Skills section
skillsSection.onmouseover = function() {
    document.getElementById('skill1').textContent = 'Programming Languages';
    document.getElementById('skill2').textContent = 'Web Development';
    document.getElementById('skill3').textContent = 'Version Control';
    document.getElementById('skill4').textContent = 'Software Development';
    document.getElementById('skill5').textContent = 'Android Development';
    document.getElementById('skill6').style.display = 'none';
    document.getElementById('skill7').style.display = 'none';
};

skillsSection.onmouseout = function() {
    document.getElementById('skill1').textContent = 'Project Management';
    document.getElementById('skill2').textContent = 'Public Relations';
    document.getElementById('skill3').textContent = 'Teamwork';
    document.getElementById('skill4').textContent = 'Time Management';
    document.getElementById('skill5').textContent = 'Leadership';
    document.getElementById('skill6').style.display = 'block';
    document.getElementById('skill7').style.display = 'block';
    document.getElementById('skill6').textContent = 'Effective Communication';
    document.getElementById('skill7').textContent = 'Critical Thinking';
};

// Languages section
languagesSection.onmouseover = function() {
    document.getElementById('language1').textContent = 'Arabic (Native)';
    document.getElementById('language2').textContent = 'English (Intermediate level)';
    document.getElementById('language3').style.display = 'none';
    document.getElementById('language4').style.display = 'none';
};

languagesSection.onmouseout = function() {
    document.getElementById('language1').textContent = 'English (Fluent)';
    document.getElementById('language2').textContent = 'French (Fluent)';
    document.getElementById('language3').style.display = 'block';
    document.getElementById('language4').style.display = 'block';
    document.getElementById('language3').textContent = 'German (Basic)';
    document.getElementById('language4').textContent = 'Spanish (Intermediate)';
};
