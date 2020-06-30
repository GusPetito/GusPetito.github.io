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

addSection(true, true, "Test project 1", "Test 1 text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc bibendum nulla nulla, a aliquam tellus bibendum quis. Donec vulputate mauris a enim molestie feugiat. Etiam dapibus aliquam odio, ut varius neque efficitur eget.", 'imgs/cornell3.jpg', 'imgs/cornell1.jpg', {githubLink: "#git", alternateLink:"#link"})

addSection(false, false, "Test project 2", "Test 2 text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc bibendum nulla nulla, a aliquam tellus bibendum quis.", 'imgs/cornell4.jpg', 'imgs/cornell2.jpg', {githubLink: "#git2"})