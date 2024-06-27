console.log("=========");
const playbtn = document.getElementsByClassName("play-btn")[0];
const audioplayer = document.getElementsByTagName("audio")[0];
const playicon = document.getElementsByClassName("fa-solid fa-play")[0];
const puaseicon = document.getElementsByClassName("fa-solid fa-pause")[0];
const backwardbtn = document.getElementsByClassName("backward-btn")[0];
const forwardbtn = document.getElementsByClassName("forward-btn")[0];
const playlist = [
  {
    name: "duu1",
    src: "./assets/songs/The Weeknd - Blinding Lights (Official Video) (256).mp3",
  },

  {
    name: "duu2",
    src: "./assets/songs/The Weeknd - Save Your Tears (Official Music Video) (256).mp3",
  },
  {
    name: "duu3",
    src: "./assets/songs/Vampire Weekend - Creep - Missoula MT - 06-22-24 - Live (256).mp3",
  },
];
let currentsong = 0;
playbtn.addEventListener("click", () => {
  if (audioplayer.paused) {
    audioplayer.play();
    playicon.classList.add("hide");
    puaseicon.classList.remove("hide");
  } else {
    audioplayer.pause();
    playicon.classList.remove("hide");
    puaseicon.classList.add("hide");
  }
});
forwardbtn.addEventListener("click", () => {
  currentsong++;
  if (currentsong === playlist.length) {
    currentsong = 0;
  }
  audioplayer.src = playlist[currentsong].src;
  audioplayer.play();
  //   console.log(currentsong);
});
backwardbtn.addEventListener("click", () => {
  currentsong--;
  if (currentsong === 0) {
    currentsong = playlist.length;
  }
  audioplayer.src = playlist[currentsong].src;
  audioplayer.play();
  //   console.log(currentsong);
});
