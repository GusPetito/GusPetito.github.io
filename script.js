let projects = document.getElementById("projects")
let sectionHtml = projects.firstElementChild
projects.innerHTML = ""

const getLastClassElement = className => {
  let elems = document.getElementsByClassName(className)
  return elems[elems.length - 1]
}

let addSection = (isPictureLeft, withArrow, title, text, imageLink, iconImageLink, {githubLink, alternateLink}) => {
  let newSectionHtml = sectionHtml.cloneNode(true)
  let newId = `project-${title.split(' ').join('-').toLowerCase()}`
  newSectionHtml.id = newId
  projects.appendChild(newSectionHtml)

  if(isPictureLeft){
    let profilePic = getLastClassElement("profile-pic")
    profilePic.classList.add('profile-pic-left')
    getLastClassElement("profile-pic-wrapper-right").innerHTML = ""
    getLastClassElement("profile-pic-wrapper-left").appendChild(profilePic)
  }

  if(!withArrow){
    getLastClassElement("arrow-wrapper").innerHTML = ""
  }

  getLastClassElement("project-title").innerHTML = title
  getLastClassElement("project-text").innerHTML = text
  document.getElementById(newId).style.backgroundImage = `url(${imageLink})`
  getLastClassElement("profile-pic").src = iconImageLink

  alternateLinkElem = getLastClassElement("alternate-link")
  if(alternateLink) alternateLinkElem.href = alternateLink
  else alternateLinkElem.innerHTML = ""

  githubLinkElem = getLastClassElement("github-link")
  if(githubLink) githubLinkElem.href = githubLink
  else githubLinkElem.innerHTML = ""

  getLastClassElement("github-link").href = githubLink
}

addSection(true, true, "Mandelbrot Set Generator", "A mandelbrot fractal generator built in Python using NumPy and PyGame. Supports zooming in and aesthetic options.", 'imgs/cornell3.jpg', 'imgs/mandelbrot.png', {githubLink: "https://github.com/GusPetito/Mandelbrot-Set-Generator"})

addSection(false, false, "Conway's Game of Life", "A small Conway's Game of Life simulator built in Python.", 'imgs/cornell4.jpg', 'imgs/conways.png', {githubLink: "https://github.com/GusPetito/conways-game-of-life"})