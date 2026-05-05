  
      function toggleMateri(element) {
        const all = document.querySelectorAll(".list-materi");

        all.forEach(item => {
          if (item !== element.querySelector(".list-materi")) {
            item.classList.remove("show");
          }
        });

        const list = element.querySelector(".list-materi");
        list.classList.toggle("show");
      }


