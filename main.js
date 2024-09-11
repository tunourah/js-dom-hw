myName =document.getElementById('my-name');
leftSection = document.getElementsByClassName('left-section')[0];
 const myImage = document.getElementsByTagName('img')[0];
const contactSection = document.getElementById('contactSection');
const educationSection = document.getElementById('educationSection');
function changeName(){
    this.textContent = " Noura Altuwaim ✨";
    this.style.color = "red";
}
myName.onmouseover = changeName;
// ot 
function changeNameBack(){
    this.textContent = "RICHARD SANCHEZ";
    this.style.color = "black";

}
myName.onmouseout = changeNameBack;
function backgrondColor() {
    leftSection.style.background = "linear-gradient(to right, #d16ba5, #86a8e7, #5ffbf1)";
    leftSection.style.backgroundSize = "200% 200%";
    leftSection.style.border = " 2px solid #000";
    leftSection.style.borderRadius = "10px";
}


leftSection.onmouseover = backgrondColor;

function changeImage() {
    myImage.src = "https://tunora.netlify.app/assets/IMG_7254-removebg-preview.png";
    myImage.style.width = "200px";
    myImage.style.height = "200px";
    myImage.style.border = "none";

}
myImage.onmouseover = changeImage;
 
contactSection.onmouseout = function() {
    document.getElementById('phone').innerHTML = '<i class="bi bi-telephone"></i> +966 5058529400';
    document.getElementById('email').innerHTML = '<i class="bi bi-envelope"></i> nourahaltuaim@gmail.com';
    document.getElementById('address').innerHTML = '<i class="bi bi-geo-alt"></i> Riyadh City';
    document.getElementById('website').innerHTML = '<i class="bi bi-globe"></i> www.tunora.netlify.app';
  };
  
  // education section 

 
educationSection.onmouseover = function() {
    
    document.getElementById('masters').textContent = '';
    document.getElementById('bachelors').innerHTML = '2020 - 2024<br /> <strong> <i>Prince Sattam bin Abdulaziz University 🌟<i> </strong> <br /> Bachelor of Software Engineering  <br /> GPA: 🤖 / 5.0';
  };


  // skills section
  // Select the skills and languages sections
const skillsSection = document.getElementById('skillsSection');
const languagesSection = document.getElementById('languagesSection');

// Add event listener for mouseover to change Skills
skillsSection.onmouseover = function() {
  document.getElementById('skill1').textContent = ' Programming Languages ';
  document.getElementById('skill2').textContent = 'Web Development';
  document.getElementById('skill3').textContent = 'Version Control ';
  document.getElementById('skill4').textContent = 'Software Development ';
  document.getElementById('skill5').textContent = 'Android Development';
  document.getElementById('skill6').remove();
  document.getElementById('skill7').remove()
};

// Revert Skills content on mouseout
skillsSection.onmouseout = function() {
  document.getElementById('skill1').textContent = 'Project Management';
  document.getElementById('skill2').textContent = 'Public Relations';
  document.getElementById('skill3').textContent = 'Teamwork';
  document.getElementById('skill4').textContent = 'Time Management';
  document.getElementById('skill5').textContent = 'Leadership';
  document.getElementById('skill6').textContent = 'Effective Communication';
  document.getElementById('skill7').textContent = 'Critical Thinking';
};

// Languages section
languagesSection.onmouseover = function() {
  document.getElementById('language1').textContent = ' Arabic (Native) ';
  document.getElementById('language2').textContent = 'English(intermediate level)';
  document.getElementById('language3').remove() ;
  document.getElementById('language4').remove();
};

 
languagesSection.onmouseout = function() {
  document.getElementById('language1').textContent = 'English (Fluent)';
  document.getElementById('language2').textContent = 'French (Fluent)';
  document.getElementById('language3').textContent = 'German (Basic)';
  document.getElementById('language4').textContent = 'Spanish (Intermediate)';
};
