(() => {
  console.log('Hip hip hurray!');

  String.prototype.capIt = function() { return this.replace(this.charAt(), this.charAt(), this.charAt().toUpperCase()); }

  //Variable Stack
  let sigils = document.querySelectorAll('.sigilContainer'),
      lightbox = document.querySelector('.lightbox'),
      closeLightBoxButton = lightbox.querySelector('.close-lightbox'),
      videoPlayer = document.querySelector('video'),
<<<<<<< HEAD
      videoControls = document.querySelector('controls');
=======
      videoControls = doucment.querySelector('.controls'),
      imageBanner = document.querySelector('#houseImages');
>>>>>>> 456bf6e12cbbbf64d90c2bf79a42737019d070b7

  // functions in the middle
  function showHouseVideo() {
    let houseName = this.className.split(' ')[1].capIt();
    //split appart the class name on the element, grab the house from the result
    document.querySelector('h1').textContent = `House ${houseName}`;
    //debugger;
    lightbox.classList.add('show-lightbox');
    //make the video play
    videoPlayer.src = `video/House-${houseName}.${videoPlayer.currentSrc.split('.')[1]}`;
    videoPlayer.load();
    videoPlayer.play();

    scrollBanners(this.dataset.offset)
  }

  function scrollBanners(offset) {
    //move the banner images to the left
    let moveIt = offset * 600 + "px";

    imageBanner.style.right = moveIt;
  }

  function closeLightBox() {
    lightbox.classList.remove('show-lightbox');
    videoPlayer.pause();
    videoPlayer.currentTime = 0;
  }

  function pausePlay() {
    //debugger
    let theButton = this.firstElementChild;
    //
    if (videoPlayer.paused == true) {
      //play the video
      videoPlayer.play();
      theButton.dataset.icon = "pause-circle";
    }  else {
      videoPlayer.pause();
      theButton.dataset.icon = "play-circle";
      }
    }

  //Event handling at the bottom
  sigils.forEach(sigil => sigil.addEventListener('click', showHouseVideo));
  closeLightBoxButton.addEventListener('click', closeLightBox);
  videoPlayer.addEventListener('ended', closeLightBox);
  videoControls.addEventListener('click', pausePlay);
})();
