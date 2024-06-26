console.log("=========");
const playbtn = document.getElementsByClassName("play-btn")[0];
const audioplayer = document.getElementsByTagName("audio")[0];
playbtn.addEventListener("click", () => {
  //   const audio = document.getElementsByTagName("audio")[0];
  //   audio.play;
  // audioplayer.paused
  if (audioplayer.paused) {
    audioplayer.play();
    playbtn.textContent;
  } else {
    audioplayer.pause();
  }
});
const playicon = document.getElementsByClassName("fa-play")[0];
const puaseicon = document.getElementsByClassName("fa-pause")[0];

const nextbtn = documentg;
