 
      const audio = document.getElementById("musik");
      const btn = document.querySelector(".tombol button");

      let isPlaying = false;

      function playMusic() {
        if (!isPlaying) {
          audio.currentTime = 236;
          audio.play();
          btn.innerText = "Berhenti Berkicau 🐦";
          isPlaying = true;
        } else {
          audio.pause();
          btn.innerText = "Klik Disini";
          isPlaying = false;
        }
      }

      // loop dari 3:56 sampai 4:08
      audio.addEventListener("timeupdate", function () {
        if (audio.currentTime >= 248) {
          audio.currentTime = 238;
          audio.play();
        }
      });
   