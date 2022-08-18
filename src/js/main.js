const bgm = new Audio("../res/gmhsalmtoy.mp3")
var isPlaying = false

function initialize(){
  // bgm.play()
  document.getElementById('catslide2').addEventListener('click', () => showModal('modal-slide2'))
  document.getElementById('modal-letter-close-slide-2').addEventListener('click', () => hideModal('modal-slide2'))

  document.getElementById('catslide3').addEventListener('click', () => showModal('modal-slide3'))
  document.getElementById('modal-gallery-close').addEventListener('click', () => hideModal('modal-slide3'))

  document.getElementById('catslide4').addEventListener('click', () => showModal('modal-slide4'))
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

function showModal(modalId){
  const modal = document.getElementById(modalId);
  modal.style.display = "flex";
}

function hideModal(modalId){
  const modal = document.getElementById(modalId);
  modal.style.display = "none";
}

function sheSaidYes(){
  hideModal('modal-slide4')
  scrollToSection('slide5')
}

function sheSaidNo(){
  alert('Well shit then')
}