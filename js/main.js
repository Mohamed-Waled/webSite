// On Load
function onLoad() {
  let isDark = window.localStorage.getItem("isDark?");
  let checkBox = document.querySelector(".checkbox");
  let checkBox1 = document.querySelector(".checkbox1");
  let checkBox2 = document.querySelector(".checkbox2");
  let html = document.querySelector("html");
  let body = document.querySelector("body");

  window.addEventListener("load", () => {
    if (isDark === "true") {
      html.classList.add("darkMode");
      body.classList.add("dark-mode");
      checkBox.checked = true;
      checkBox1.checked = true;
      checkBox2.checked = true;
    } else {
      html.classList.remove("darkMode");
      body.classList.remove("dark-mode");
      checkBox.checked = false;
      checkBox1.checked = false;
      checkBox2.checked = false;
    }
  });
}

// On Load Languages
function onLoadLanguages() {
  let isArabic = window.localStorage.getItem("isArabic?");
  let checkBoxlang = document.querySelector(".checkboxlang");
  let checkBoxlang1 = document.querySelector(".checkboxlang1");
  let checkBoxlang2 = document.querySelector(".checkboxlang2");
  let body = document.querySelector("body");

  let email = document.querySelector(".email1");
  let subscribe = document.querySelector(".subscribee");
  let name = document.querySelector(".namee");
  let email1 = document.querySelector(".emaill");
  let mobile = document.querySelector(".mobilee");
  let message = document.querySelector(".messagee");
  let submit = document.querySelector(".sendd");
  let copyright = document.querySelector(".copyright");

  window.addEventListener("load", () => {
    if (isArabic === "true") {
      translate("ar");
      body.classList.add("rtl");
      body.setAttribute("dir", "rtl");
      checkBoxlang.checked = true;
      checkBoxlang1.checked = true;
      checkBoxlang2.checked = true;
      email.setAttribute("placeholder", "ادخل بريدك الإلكترونى");
      subscribe.setAttribute("value", "اشترك");
      submit.setAttribute("value", "ارسل");
      name.setAttribute("placeholder", "ادخل أسمك");
      email1.setAttribute("placeholder", "ادخل بريدك الالكترونى");
      mobile.setAttribute("placeholder", "ادخل رقم هاتفك");
      message.setAttribute("placeholder", "ادخل رسالتك");
      copyright.innerHTML = `تمت برمجتها بكل ال ❤ بواسطة
      <a href="https://github.com/Mohamed-Waled" target="_blank"
        >م : محمد وليد</a
      >.`;
    } else {
      translate("en");
      body.classList.remove("rtl");
      body.removeAttribute("dir", "rtl");
      checkBoxlang.checked = false;
      checkBoxlang1.checked = false;
      checkBoxlang2.checked = false;
      email.setAttribute("placeholder", "Enter Your Email");
      subscribe.setAttribute("value", "Subscribe");
      submit.setAttribute("value", "Send");
      name.setAttribute("placeholder", "Your Name");
      email1.setAttribute("placeholder", "Your Email");
      mobile.setAttribute("placeholder", "Your Phone");
      message.setAttribute("placeholder", "Tell Us About Your Needs");
      copyright.innerHTML = `coded with ❤ by
      <a href="https://github.com/Mohamed-Waled" target="_blank"
        >Eng: mohamed waled</a
      >.`;
    }
  });
}

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

// Hide and Show Header
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

// Other Links Button On Mobile Screens
function buttonClick() {
  let button = document.querySelector("button");
  let megaMenu = document.querySelector(".megaMenu2");
  let exit = document.querySelector(".up");
  let goOut = document.querySelectorAll(".linksMenu li");

  button.addEventListener("click", () => {
    megaMenu.style.top = `100%`;
    megaMenu.style.opacity = `1`;
    megaMenu.style.zIndex = `100`;
  });

  exit.addEventListener("click", () => {
    megaMenu.style.top = `-1000px`;
    megaMenu.style.opacity = `0`;
    megaMenu.style.zIndex = `-1`;
  });

  goOut.forEach((li) => {
    li.addEventListener("click", () => {
      megaMenu.style.top = `-10000px`;
      megaMenu.style.opacity = `0`;
      megaMenu.style.zIndex = `-1`;
    });
  });
}

// Scroll To Top Button
function showUpScrollToTopButton() {
  let scrollToTopButton = document.querySelector(".scrollToTop");

  window.addEventListener("scroll", () => {
    if (this.scrollY >= 3000) {
      scrollToTopButton.classList.add("showUp");
    } else {
      scrollToTopButton.classList.remove("showUp");
    }
  });

  scrollToTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
    });
  });
}

// Dark Mode Button
function darkModeButton() {
  let checkBox = document.querySelector(".checkbox");
  let checkBox1 = document.querySelector(".checkbox1");
  let checkBox2 = document.querySelector(".checkbox2");

  let html = document.querySelector("html");
  let body = document.querySelector("body");

  checkBox.addEventListener("change", () => {
    if (checkBox.checked) {
      html.classList.add("darkMode");
      body.classList.add("dark-mode");
    } else {
      html.classList.remove("darkMode");
      body.classList.remove("dark-mode");
    }
  });

  checkBox1.addEventListener("change", () => {
    if (checkBox1.checked) {
      html.classList.add("darkMode");
      body.classList.add("dark-mode");
    } else {
      html.classList.remove("darkMode");
      body.classList.remove("dark-mode");
    }
  });

  checkBox2.addEventListener("change", () => {
    if (checkBox2.checked) {
      html.classList.add("darkMode");
      body.classList.add("dark-mode");
    } else {
      html.classList.remove("darkMode");
      body.classList.remove("dark-mode");
    }
  });
}

// Is Dark Mode?
function addtoLocalStorage() {
  let checkBox = document.querySelector(".checkbox");
  let checkBox1 = document.querySelector(".checkbox1");
  let checkBox2 = document.querySelector(".checkbox2");

  let dark = false;

  checkBox.addEventListener("change", () => {
    if (checkBox.checked) {
      dark = true;
      window.localStorage.setItem("isDark?", dark);
    } else {
      dark = false;
      window.localStorage.setItem("isDark?", dark);
    }
  });

  checkBox1.addEventListener("change", () => {
    if (checkBox1.checked) {
      dark = true;
      window.localStorage.setItem("isDark?", dark);
    } else {
      dark = false;
      window.localStorage.setItem("isDark?", dark);
    }
  });

  checkBox2.addEventListener("change", () => {
    if (checkBox2.checked) {
      dark = true;
      window.localStorage.setItem("isDark?", dark);
    } else {
      dark = false;
      window.localStorage.setItem("isDark?", dark);
    }
  });
}

function translate(language) {
  let lang = language;
  let allDom = document.querySelectorAll("*");

  fetch(
    `https://raw.githubusercontent.com/Mohamed-Waled/webSite/main/languages/${lang}.json`
  )
    .then((response) => {
      return response.json();
    })
    .then((jsondata) => {
      for (const key in jsondata) {
        allDom.forEach((element) => {
          for (const attr of element.attributes) {
            if (element.hasAttribute("data-lang")) {
              if (attr.name === "data-lang") {
                if (attr.value === key) {
                  element.innerHTML = jsondata[key];
                }
              }
            }
          }
        });
      }
    });
}

//Change Languages Button
function changeLanguagesButton() {
  let checkBoxlang = document.querySelector(".checkboxlang");
  let checkBoxlang1 = document.querySelector(".checkboxlang1");
  let checkBoxlang2 = document.querySelector(".checkboxlang2");

  let email = document.querySelector(".email1");
  let subscribe = document.querySelector(".subscribee");
  let name = document.querySelector(".namee");
  let email1 = document.querySelector(".emaill");
  let mobile = document.querySelector(".mobilee");
  let message = document.querySelector(".messagee");
  let submit = document.querySelector(".sendd");
  let copyright = document.querySelector(".copyright");

  let body = document.querySelector("body");

  checkBoxlang.addEventListener("change", () => {
    if (checkBoxlang.checked) {
      translate("ar");
      body.classList.add("rtl");
      body.setAttribute("dir", "rtl");
      email.setAttribute("placeholder", "ادخل بريدك الإلكترونى");
      subscribe.setAttribute("value", "اشترك");
      submit.setAttribute("value", "ارسل");
      name.setAttribute("placeholder", "ادخل أسمك");
      email1.setAttribute("placeholder", "ادخل بريدك الالكترونى");
      mobile.setAttribute("placeholder", "ادخل رقم هاتفك");
      message.setAttribute("placeholder", "ادخل رسالتك");
      copyright.innerHTML = `تمت برمجتها بكل ال ❤ بواسطة
      <a href="https://github.com/Mohamed-Waled" target="_blank"
        >م : محمد وليد</a
      >.`;
    } else {
      translate("en");
      body.classList.remove("rtl");
      body.removeAttribute("dir", "rtl");
      email.setAttribute("placeholder", "Enter Your Email");
      subscribe.setAttribute("value", "Subscribe");
      submit.setAttribute("value", "Send");
      name.setAttribute("placeholder", "Your Name");
      email1.setAttribute("placeholder", "Your Email");
      mobile.setAttribute("placeholder", "Your Phone");
      message.setAttribute("placeholder", "Tell Us About Your Needs");
      copyright.innerHTML = `coded with ❤ by
      <a href="https://github.com/Mohamed-Waled" target="_blank"
        >Eng: mohamed waled</a
      >.`;
    }
  });

  checkBoxlang1.addEventListener("change", () => {
    if (checkBoxlang1.checked) {
      translate("ar");
      body.classList.add("rtl");
      body.setAttribute("dir", "rtl");
      email.setAttribute("placeholder", "ادخل بريدك الإلكترونى");
      subscribe.setAttribute("value", "اشترك");
      submit.setAttribute("value", "ارسل");
      name.setAttribute("placeholder", "ادخل أسمك");
      email1.setAttribute("placeholder", "ادخل بريدك الالكترونى");
      mobile.setAttribute("placeholder", "ادخل رقم هاتفك");
      message.setAttribute("placeholder", "ادخل رسالتك");
      copyright.innerHTML = `تمت برمجتها بكل ال ❤ بواسطة
      <a href="https://github.com/Mohamed-Waled" target="_blank"
        >م : محمد وليد</a
      >.`;
    } else {
      translate("en");
      body.classList.remove("rtl");
      body.removeAttribute("dir", "rtl");
      email.setAttribute("placeholder", "Enter Your Email");
      subscribe.setAttribute("value", "Subscribe");
      submit.setAttribute("value", "Send");
      name.setAttribute("placeholder", "Your Name");
      email1.setAttribute("placeholder", "Your Email");
      mobile.setAttribute("placeholder", "Your Phone");
      message.setAttribute("placeholder", "Tell Us About Your Needs");
      copyright.innerHTML = `coded with ❤ by
      <a href="https://github.com/Mohamed-Waled" target="_blank"
        >Eng: mohamed waled</a
      >.`;
    }
  });

  checkBoxlang2.addEventListener("change", () => {
    if (checkBoxlang2.checked) {
      translate("ar");
      body.classList.add("rtl");
      body.setAttribute("dir", "rtl");
      email.setAttribute("placeholder", "ادخل بريدك الإلكترونى");
      subscribe.setAttribute("value", "اشترك");
      submit.setAttribute("value", "ارسل");
      name.setAttribute("placeholder", "ادخل أسمك");
      email1.setAttribute("placeholder", "ادخل بريدك الالكترونى");
      mobile.setAttribute("placeholder", "ادخل رقم هاتفك");
      message.setAttribute("placeholder", "ادخل رسالتك");
      copyright.innerHTML = `تمت برمجتها بكل ال ❤ بواسطة
      <a href="https://github.com/Mohamed-Waled" target="_blank"
        >م : محمد وليد</a
      >.`;
    } else {
      translate("en");
      body.classList.remove("rtl");
      body.removeAttribute("dir", "rtl");
      email.setAttribute("placeholder", "Enter Your Email");
      subscribe.setAttribute("value", "Subscribe");
      submit.setAttribute("value", "Send");
      name.setAttribute("placeholder", "Your Name");
      email1.setAttribute("placeholder", "Your Email");
      mobile.setAttribute("placeholder", "Your Phone");
      message.setAttribute("placeholder", "Tell Us About Your Needs");
      copyright.innerHTML = `coded with ❤ by
      <a href="https://github.com/Mohamed-Waled" target="_blank"
        >Eng: mohamed waled</a
      >.`;
    }
  });
}

// Is Arabic?
function addLanguagetoLocalStorage() {
  let checkBoxlang = document.querySelector(".checkboxlang");
  let checkBoxlang1 = document.querySelector(".checkboxlang1");
  let checkBoxlang2 = document.querySelector(".checkboxlang2");

  let arabic = false;

  checkBoxlang.addEventListener("change", () => {
    if (checkBoxlang.checked) {
      arabic = true;
      window.localStorage.setItem("isArabic?", arabic);
    } else {
      arabic = false;
      window.localStorage.setItem("isArabic?", arabic);
    }
  });

  checkBoxlang1.addEventListener("change", () => {
    if (checkBoxlang1.checked) {
      arabic = true;
      window.localStorage.setItem("isArabic?", arabic);
    } else {
      arabic = false;
      window.localStorage.setItem("isArabic?", arabic);
    }
  });

  checkBoxlang2.addEventListener("change", () => {
    if (checkBoxlang2.checked) {
      arabic = true;
      window.localStorage.setItem("isArabic?", arabic);
    } else {
      arabic = false;
      window.localStorage.setItem("isArabic?", arabic);
    }
  });
}

countDown();
skillsWidth();
statsCount();
dotsEntering();
dotsOuting();
hidingShowingHeader();
buttonClick();
showUpScrollToTopButton();
darkModeButton();
addtoLocalStorage();
onLoad();
changeLanguagesButton();
addLanguagetoLocalStorage();
onLoadLanguages();
