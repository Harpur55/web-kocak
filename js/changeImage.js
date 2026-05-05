
      const images = document.querySelectorAll(".fade-box img");
      let index = 0;

      function gantiGambar() {
        images.forEach((img) => img.classList.remove("active"));

        images[index].classList.add("active");

        // pindah ke berikutnya
        index = (index + 1) % images.length;
      }

      // jalankan pertama kali
      gantiGambar();

      // ganti tiap 2 detik
      setInterval(gantiGambar, 1500);
    