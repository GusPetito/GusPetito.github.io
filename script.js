// Get the project section
let projects = document.getElementById("projects");
let sectionHtml = projects.firstElementChild;
projects.innerHTML = "";

// Return the last element with class className
const getLastClassElement = className => {
  let elems = document.getElementsByClassName(className);
  return elems[elems.length - 1];
}

// Add a block to the project section
let addSection = (isPictureLeft, withArrow, title, text, imageLink, iconImageLink, {githubLink, alternateLink}) => {
  let newSectionHtml = sectionHtml.cloneNode(true);
  let newId = `section-${title.split(' ').join('-').toLowerCase()}`;
  newSectionHtml.id = newId;
  projects.appendChild(newSectionHtml);

  if(isPictureLeft){
    let profilePic = getLastClassElement("profile-pic");
    profilePic.classList.add('profile-pic-left');
    getLastClassElement("profile-pic-wrapper-right").innerHTML = "";
    getLastClassElement("profile-pic-wrapper-left").appendChild(profilePic);
  }

  if(!withArrow){
    getLastClassElement("arrow-wrapper").innerHTML = "";
  }

  getLastClassElement("project-title").innerHTML = title;
  getLastClassElement("project-text").innerHTML = text;
  document.getElementById(newId).style.backgroundImage = `url(${imageLink})`;
  getLastClassElement("profile-pic").src = iconImageLink;

  alternateLinkElem = getLastClassElement("alternate-link");
  if(alternateLink) alternateLinkElem.href = alternateLink;
  else alternateLinkElem.innerHTML = "";

  githubLinkElem = getLastClassElement("github-link");
  if(githubLink) githubLinkElem.href = githubLink;
  else githubLinkElem.innerHTML = "";

  getLastClassElement("github-link").href = githubLink;
}

// Add the projects
addSection(true, true, "Mandelbrot Set Generator", "A mandelbrot fractal generator built in Python using NumPy and PyGame. Supports zooming in and aesthetic options.", 'imgs/cornell3.jpg', 'imgs/mandelbrot.png', {githubLink: "https://github.com/GusPetito/Mandelbrot-Set-Generator"});

addSection(false, false, "Conway's Game of Life", "A small Conway's Game of Life simulator built in Python.", 'imgs/cornell4.jpg', 'imgs/conways.png', {githubLink: "https://github.com/GusPetito/conways-game-of-life"});

// <----------------------------------------------------------->

// Set navbar scrolling highlighters
// const sections = document.getElementsByClassName("background-img");
// window.onscroll = () => {
//   for (let i = 0; i < sections.length; i++) {
//     let section = sections[i];
//     // Add the appropriate class name if in the section, else remove it
//     const class_idx = section.className.indexOf("selected-page")
//     if (window.pageYOffset >= section.offsetTop && window.pageYOffset < section.offsetTop + section.offsetHeight) {
//       if (class_idx == -1) section.className = "selected-page";
//     } else {
//       if (class_idx != -1) section.className = "";
//     }
//   }
// };
