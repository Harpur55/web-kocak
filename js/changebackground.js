
      function changeBackgroundColor() {
        const colors = ["#D8E2DC", "#FFE5D9", "#FFCAD4", "#CDB4DB", "#A2D2FF"];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        document.body.style.backgroundColor = randomColor;
      }
      changeBackgroundColor();
      setInterval(changeBackgroundColor, 1000);
