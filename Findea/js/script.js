const pinterestImg = document.getElementById("pinterest"),
  facebookImg = document.getElementById("facebook"),
  instagramImg = document.getElementById("instagram"),
  emailImg = document.getElementById("email"),
  btnLeft = document.querySelector(".btn-left"),
  btnRight = document.querySelector(".btn-right"),
  positioner = document.querySelectorAll(".position");
  slider = document.querySelector("#slider"),
  body = document.body,
  hamburgerCheckbox = document.getElementById('hamburger'),
  sliderSection = document.querySelectorAll(".slider-section"); //Esto devuelve una nodelist con los 3 section

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
    positioner[0].style.background = "var(--azul-claro)"
    positioner[2].style.background = "white";

    // slider.style.transition = "none"; Para que no tenga transición en la última
  } else {
    counter++;
    operacion = operacion+widthImg;
    slider.style.transform = `translate(-${operacion}%)`;
    slider.style.transition = "all ease .6s";
    
    positioner[counter-1].style.background = "white"
    positioner[counter].style.background = "var(--azul-claro)"
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

//Que no se pueda hacer scroll para que el menú quede como página aparte
hamburgerCheckbox.addEventListener('change', function() {
  if (hamburgerCheckbox.checked) {
    body.classList.add('no-scroll'); // Bloquea el scroll
  } else {
    body.classList.remove('no-scroll'); // Permite el scroll nuevamente
  }
});