"use strict";

const clickToShare = document.getElementById("click-to-share");
const activeState = document.getElementById("active-state");
const clickToShare2 = document.getElementById("click-to-share2");

clickToShare.addEventListener("click", () => {
  activeState.classList.toggle("switch");
});

clickToShare2.addEventListener("click", () => {
  activeState.classList.toggle("switch");
});
