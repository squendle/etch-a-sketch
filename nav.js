const logo = document.querySelector("#logo");
const links = document.querySelectorAll("a");
const btns = document.querySelectorAll(".btns");

function changeLogoColor(e){
  logo.setAttribute("src", "img/logo2.png");
};

function removeLogoColor(e){
  logo.setAttribute("src", "img/logo.png");
};

function ghostButton(e){
 this.classList.add("ghost");
}

function removeGhostButton(e){
  this.classList.remove("ghost");
}

function changeItemColor(e) {
  this.classList.add("purp-text");
};

function removeItemColor(e) {
  this.classList.remove("purp-text");
}

logo.addEventListener("mouseover", changeLogoColor);
logo.addEventListener("mouseout", removeLogoColor);
links.forEach(item => item.addEventListener("mouseover", changeItemColor));
links.forEach(item => item.addEventListener("mouseout", removeItemColor));
btns.forEach(item => item.addEventListener("mouseover", ghostButton));
btns.forEach(item => item.addEventListener("mouseout", removeGhostButton));