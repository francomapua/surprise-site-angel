const bgm = new Audio("../res/gmhsalmtoy.mp3")
var isPlaying = false

function initialize(){
  // bgm.play()
  document.getElementById('catslide2').addEventListener('click', () => showModal('modal-slide2'))
  document.getElementById('modal-letter-close-slide-2').addEventListener('click', () => hideModal('modal-slide2'))

  document.getElementById('catslide3').addEventListener('click', () => showModal('modal-slide3'))
  document.getElementById('modal-gallery-close').addEventListener('click', () => hideModal('modal-slide3'))

  document.getElementById('catslide4').addEventListener('click', () => showModal('modal-slide4'))

  document.getElementById('img-music-play').addEventListener('click', () => toggleMusic())
  document.getElementById('img-music-pause').addEventListener('click', () => toggleMusic())

}

var isMusicPlaying = false
function toggleMusic(){
  console.log('isMusicPlaying', isMusicPlaying);
  if(!isMusicPlaying){
    bgm.play()
    document.getElementById('img-music-play').style.display = 'block'
    document.getElementById('img-music-pause').style.display = 'none'
    isMusicPlaying = true
  }
  else{
    bgm.pause()
    document.getElementById('img-music-play').style.display = 'none'
    document.getElementById('img-music-pause').style.display = 'block'
    isMusicPlaying = false
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