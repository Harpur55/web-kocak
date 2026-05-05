
      function ledak() {
        confetti({
          spread: 360,
          ticks: 200,
          gravity: 1,
          decay: 0.94,
          startVelocity: 30,
          particleCount: 80,
          scalar: 1.2,

          shapes: ["image"],

          shapeOptions: {
            image: [
              {
                src: "./image/sss.jpg", // 🔥 FIX PALING AMAN
                width: 32,
                height: 32,
              },
            ],
          },
        });
      }
    