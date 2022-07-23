// Events Count Down
function countDown() {
  let countdownDate = new Date("Sept 28, 2023 23:59:59").getTime();

  let counter = setInterval(() => {
    // Get Time Now
    let timeNow = new Date().getTime();
    // Find The Date Difference Between Now And Countdown Date
    let dateDiff = countdownDate - timeNow;

    // Get TIme Units
    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

    document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
    document.querySelector(".hours").innerHTML =
      hours < 10 ? `0${hours}` : hours;
    document.querySelector(".minutes").innerHTML =
      minutes < 10 ? `0${minutes}` : minutes;
    document.querySelector(".seconds").innerHTML =
      seconds < 10 ? `0${seconds}` : seconds;

    if (dateDiff <= 0) {
      clearInterval(counter);
    }
  }, 1000);
}

// Skills Width
function skillsWidth() {
  // Find The Desired Section
  let section = document.querySelector("#ourSkills");
  let progressBar = document.querySelectorAll(".progress");

  window.addEventListener("scroll", () => {
    if (window.scrollY >= section.offsetTop - 150) {
      progressBar.forEach((bar) => {
        bar.style.width = bar.dataset.width;
      });
    }

    if (window.scrollY < section.offsetTop - 200) {
      progressBar.forEach((bar) => {
        bar.style.width = 0;
      });
    }
  });
}

// Stats Count
function statsCount() {
  let nums = document.querySelectorAll(".number");
  let section = document.querySelector("#ourAwesomeStats");
  let started = false; // is function started ? no

  window.addEventListener("scroll", () => {
    if (window.scrollY >= section.offsetTop - 200) {
      if (!started) {
        nums.forEach((number) => {
          startCount(number);
        });
      }
      started = true;
    }
  });

  function startCount(element) {
    let goal = element.dataset.goal;
    let counter = setInterval(() => {
      element.textContent++;
      if (element.textContent === goal) {
        clearInterval(counter);
      }
    }, 2000 / goal);
  }
}

// Dots Entering
function dotsEntering() {
  let section1 = document.querySelector("#latestEvents");
  let section2 = document.querySelector("#pricingPlans");
  let dots1 = document.querySelectorAll(".dots-up");
  let dots2 = document.querySelectorAll(".dots-down");

  // First Section
  window.addEventListener("scroll", () => {
    if (window.scrollY >= section1.offsetTop - 300) {
      dots1[0].style.right = 0;
    }
  });
  window.addEventListener("scroll", () => {
    if (window.scrollY >= section1.offsetTop - 200) {
      dots2[0].style.left = 0;
    }
  });

  // Second Section
  window.addEventListener("scroll", () => {
    if (window.scrollY >= section2.offsetTop - 300) {
      dots1[1].style.right = 0;
    }
  });

  window.addEventListener("scroll", () => {
    if (window.scrollY >= section2.offsetTop - 200) {
      dots2[1].style.left = 0;
    }
  });
}

// Dots Outing
function dotsOuting() {
  let section1 = document.querySelector("#latestEvents");
  let section2 = document.querySelector("#pricingPlans");
  let dots1 = document.querySelectorAll(".dots-up");
  let dots2 = document.querySelectorAll(".dots-down");

  // First Section
  window.addEventListener("scroll", () => {
    if (window.scrollY >= section1.offsetTop + 200) {
      dots1[0].style.right = `-210px`;
    }
  });
  window.addEventListener("scroll", () => {
    if (window.scrollY >= section1.offsetTop + 300) {
      dots2[0].style.left = `-210px`;
    }
  });

  // Second Section
  window.addEventListener("scroll", () => {
    if (window.scrollY >= section2.offsetTop + 200) {
      dots1[1].style.right = `-210px`;
    }
  });

  window.addEventListener("scroll", () => {
    if (window.scrollY >= section2.offsetTop + 300) {
      dots2[1].style.left = `-210px`;
    }
  });
}

function hidingShowingHeader() {
  let header = document.querySelector("header");
  let section1 = document.querySelector("#articles");
  let section2 = document.querySelector(".footer");
  let scroll1 = window.scrollY;

  document.addEventListener("scroll", () => {
    if (
      this.scrollY >= section1.offsetTop &&
      this.screenY <= section2.offsetTop
    ) {
      if (scroll1 > this.scrollY) {
        header.style.top = "72px";
        scroll1 = this.scrollY;
      } else {
        header.style.top = "-100px";
        scroll1 = this.scrollY;
      }
    }
  });
}

function buttonClick() {
  let button = document.querySelector("button");
  let megaMenu = document.querySelector(".megaMenu2");
  console.log(megaMenu);
  button.addEventListener("click", () => {
    megaMenu.style.top = `100px`;
  });

  button.addEventListener("blur", () => {
    megaMenu.style.top = `-1000%`;
  });
}

countDown();
skillsWidth();
statsCount();
dotsEntering();
dotsOuting();
hidingShowingHeader();
buttonClick();
