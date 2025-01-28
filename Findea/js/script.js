const pinterestImg = document.getElementById("pinterest"),
  facebookImg = document.getElementById("facebook"),
  instagramImg = document.getElementById("instagram"),
  emailImg = document.getElementById("email"),
  btnLeft = document.querySelector(".btn-left"),
  btnRight = document.querySelector(".btn-right"),
  slider = document.querySelector("#slider"),
  sliderSection = document.querySelectorAll(".slider-section"); //Esto devuelve una nodelist con los 3 section

console.log(sliderSection);
console.log(slider);

pinterestImg.addEventListener("mouseenter", () => {
  pinterestImg.src =
    "https://fotos-yvv.s3.us-east-1.amazonaws.com/Iconos-Findea/pinterest-a.svg";
});

pinterestImg.addEventListener("mouseleave", () => {
  pinterestImg.src =
    "https://fotos-yvv.s3.us-east-1.amazonaws.com/Iconos-Findea/pinterest-n.svg";
});

facebookImg.addEventListener("mouseenter", () => {
  facebookImg.src =
    "https://fotos-yvv.s3.us-east-1.amazonaws.com/Iconos-Findea/facebook-a.svg";
});

facebookImg.addEventListener("mouseleave", () => {
  facebookImg.src =
    "https://fotos-yvv.s3.us-east-1.amazonaws.com/Iconos-Findea/facebook-n.svg";
});

instagramImg.addEventListener("mouseenter", () => {
  instagramImg.src =
    "https://fotos-yvv.s3.us-east-1.amazonaws.com/Iconos-Findea/instagram-a.svg";
});

instagramImg.addEventListener("mouseleave", () => {
  instagramImg.src =
    "https://fotos-yvv.s3.us-east-1.amazonaws.com/Iconos-Findea/instagram-n.svg";
});

emailImg.addEventListener("mouseenter", () => {
  emailImg.src =
    "https://fotos-yvv.s3.us-east-1.amazonaws.com/Iconos-Findea/mail-a.svg";
});

emailImg.addEventListener("mouseleave", () => {
  emailImg.src =
    "https://fotos-yvv.s3.us-east-1.amazonaws.com/Iconos-Findea/mail-n.svg";
});

btnLeft.addEventListener("click", (e) => moveToLeft());
btnRight.addEventListener("click", (e) => moveToRight());

let operacion = 0,
  counter = 0,
  widthImg = 100 / sliderSection.length;

function moveToRight() {
  if (counter >= sliderSection.length - 1) {
    counter = 0;
    operacion = 0;
    slider.style.transform = `translate(-${operacion}%)`;
    // slider.style.transition = "none"; Para que no tenga transición en la última
  } else {
    counter++;
    operacion = operacion+widthImg;
    slider.style.transform = `translate(-${operacion}%)`;
    slider.style.transition = "all ease .6s";
  }
}

function moveToLeft() {
  counter--;
  if (counter < 0) {
    counter = sliderSection.length-1;
    operacion = widthImg * (sliderSection.length-1);
    slider.style.transform = `translate(-${operacion}%)`;
    // slider.style.transition = "none"; Para que no tenga transición en la última
    return;
  }
  operacion = operacion - widthImg;
  slider.style.transform = `translate(-${operacion}%)`;
  slider.style.transition = "all ease .6s";
}
