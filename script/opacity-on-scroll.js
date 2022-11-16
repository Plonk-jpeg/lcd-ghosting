const opacity = document.querySelector('main div p:nth-child(1)')
opacity.classList.toggle("fadein");
addEventListener('wheel', (event) => {});
onwheel = (event) => {
  if (event.deltaY = 100){
    opacity.classList.add('fadeout');
    setTimeout(function() {
      opacity.classList.remove('fadeout');
    },450);
  } else {
    opacity.classList.add('fadeout');
    setTimeout(function() {
      opacity.classList.remove('fadeout');
    },450);
  }
};
