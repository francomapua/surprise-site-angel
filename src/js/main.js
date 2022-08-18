const bgm = new Audio("../res/gmhsalmtoy.mp3")
var isPlaying = false

function initialize(){
  // bgm.play()
}

function bodyMouseHandler(){
  return
  if(bgm.paused){
    bgm.play()
  }
}

function scrollToSection(sectionId){
  document.getElementById(sectionId).scrollIntoView({ block: 'end',  behavior: 'smooth' });
  // document.getElementById(sectionId).scrollIntoView({behavior: "smooth"})
}  