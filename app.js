const parentEl = document.querySelector(".parent");
const divEl = document.querySelector("div");
const buttonEl = document.querySelector("button");


for (let i = 0; i < parentEl.childElementCount + 1; i++) {

parentEl[i].style.width = (i+1)*20 +"px";
parentEl[i].style.height = "100px";

}