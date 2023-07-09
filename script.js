let lbtn = document.querySelector(".left-btn");
      let rbtn = document.querySelector(".right-btn");
      let flag = 0;
      let n = 0;

      lbtn.addEventListener("click", () => {
        console.log(n);
        flag = (flag - 1 + n) % n;
        slideshow(flag);
      });
      rbtn.addEventListener("click", () => {
        flag = (flag + 1) % n;
        console.log(flag);
        slideshow(flag);
      });

      slideshow(flag);
      function slideshow(num) {
        let slides = document.querySelectorAll(".slide");
        n = slides.length;
        for (y of slides) {
          y.style.display = "none";
        }

        slides[num].style.display = "block";
      }