

// button manipulation

let brightness =document.querySelector(".brightness"),
 saturation =document.querySelector(".saturation"),
  inversion=document.querySelector(".inversion"),
greyscale =document.querySelector(".greyscale"),
display=document.querySelector(".display");

// display content when button is clicked

window.onload=()=>{
  display.textContent=brightness.textContent
}

brightness.onclick=()=>{
  display.textContent=brightness.textContent
}
 saturation.onclick=()=>{
  display.textContent=saturation.textContent
 }
 inversion.onclick=()=>{
  display.textContent=inversion.textContent
 }
 greyscale.onclick=()=>{
  display.textContent=greyscale.textContent
 }