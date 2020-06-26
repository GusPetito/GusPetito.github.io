let addSection = (withArrow) => {
  let sectionHtml = `
  <div class='section-wrapper flex-center-objects'>
    <div class='section'>
      <div class='section-body flex-center-objects'>
      </div>
    </div>
    <div class='arrow-wrapper'>
    </div>
  </div>
  `
  let arrowHtml = "<i class='fa fa-arrow-down fa-4x bordered-text' aria-hidden='true'></i>"
  
  let wrapper = document.createElement('div')
  wrapper.classList = ['background-img']
  wrapper.style.backgroundImage = "url(imgs/cornell3.jpg)"
  wrapper.innerHTML = sectionHtml
  console.log(wrapper)

  document.body.insertBefore(wrapper, document.getElementById("footer"))

  if(withArrow){
    let arrowWrappers = document.getElementsByClassName("arrow-wrapper")
    let arrowWrapper = arrowWrappers[arrowWrappers.length - 1]
    arrowWrapper.innerHTML = arrowHtml
  }
}