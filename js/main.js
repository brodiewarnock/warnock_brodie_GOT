(() => {
  console.log('Hip hip hurray!');

  String.prototype.capIt = function() { return this.replace(this.charAt(), this.charAt(), this.charAt().toUpperCase()); }

  //Variable Stack
  let sigils = document.querySelectorAll('.sigilContainer'),
      lightbox = document.querySelector('.lightbox'),
      closeLightBoxButton = lightbox.querySelector('.close-lightbox'),
      videoPlayer = document.querySelector('video'),
      videoControls = doucment.querySelector('controls');

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
  closeLightBoxButton.addEventListener('click', closeLightBoxButton);
  videoPlayer.addEventListener('ended', closeLightBoxButton);
  videoControls.addEventListener('click', pausePlay);
})();
