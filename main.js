// Dark mode- light mode switch
const toggleSwitch = document.getElementById("flexSwitchCheckDefault");
const card = document.getElementById("twitter-card");
const modeIndecator = document.getElementById("light-dark");

function activateDarkMode() {
  card.style.backgroundColor = "black";
  [...document.querySelectorAll(".text-color")].forEach(function (text) {
    text.style.color = "white";
  });
  [...document.querySelectorAll(".verified")].forEach(function (text) {
    text.style.color = "#fff";
  });
  [...document.querySelectorAll(".profile-img")].forEach(function (text) {
    text.style.border = "5px solid black";
  });
  [...document.querySelectorAll(".profile-img-2")].forEach(function (text) {
    text.style.border = "5px solid black";
  });
  modeIndecator.innerText = "Dark Theme";
  modeIndecator.style.color = "white";
}
function activateLightMode() {
  card.style.backgroundColor = "White";
  [...document.querySelectorAll(".text-color")].forEach(function (text) {
    text.style.color = "Black";
  });
  [...document.querySelectorAll(".verified")].forEach(function (text) {
    text.style.color = "#0d6efd";
  });
  [...document.querySelectorAll(".profile-img")].forEach(function (text) {
    text.style.border = "5px solid white";
  });
  [...document.querySelectorAll(".profile-img-2")].forEach(function (text) {
    text.style.border = "5px solid white";
  });
  modeIndecator.innerText = "Light Theme";
  modeIndecator.style.color = "#6c757d";
}
toggleSwitch.addEventListener("click", switchMode);

function switchMode() {
  if (toggleSwitch.checked === true) {
    activateDarkMode();
  } else {
    activateLightMode();
  }
}

// Background color change

const select_menu = document.getElementById("select-menu");
const body_selector = document.getElementById("body");
select_menu.addEventListener("click", setBgColor);

function setBgColor() {
  const select_option_value = select_menu.value;
  if (select_option_value !== "Select Background Color") {
    body_selector.className = "";
    body_selector.classList.add(select_option_value);
  }
}
// fetching data dynamically
const userData = {
  name: "John Doe",
  pic: "https://psdtowpwork.com/html/graptor/demo/assets/images/team/2.jpg",
};
[...document.querySelectorAll(".profileName")].forEach(function (text) {
  text.innerText = userData.name;
});
[...document.querySelectorAll(".profileImg")].forEach(function (text) {
  text.src = userData.pic;
});
