const pinterestImg = document.getElementById("pinterest"),
  facebookImg = document.getElementById("facebook"),
  instagramImg = document.getElementById("instagram"),
  emailImg = document.getElementById("email"),
  positioner = document.querySelectorAll(".position"),
  slider = document.querySelector("#slider"),
  body = document.body,
  hamburgerCheckbox = document.getElementById("hamburger"),
  sliderSection = document.querySelectorAll(".slider-section"); //Esto devuelve una nodelist con los 3 section

$("#pinterest")
  .on("mouseenter", () => {
    pinterestImg.src =
      "https://fotos-yvv.s3.us-east-1.amazonaws.com/Iconos-Findea/pinterest-a.svg";
  })
  .on("mouseleave", () => {
    pinterestImg.src =
      "https://fotos-yvv.s3.us-east-1.amazonaws.com/Iconos-Findea/pinterest-n.svg";
  });

$("#facebook")
  .on("mouseenter", () => {
    facebookImg.src =
      "https://fotos-yvv.s3.us-east-1.amazonaws.com/Iconos-Findea/facebook-a.svg";
  })
  .on("mouseleave", () => {
    facebookImg.src =
      "https://fotos-yvv.s3.us-east-1.amazonaws.com/Iconos-Findea/facebook-n.svg";
  });

$("#instagram")
  .on("mouseenter", () => {
    instagramImg.src =
      "https://fotos-yvv.s3.us-east-1.amazonaws.com/Iconos-Findea/instagram-a.svg";
  })
  .on("mouseleave", () => {
    instagramImg.src =
      "https://fotos-yvv.s3.us-east-1.amazonaws.com/Iconos-Findea/instagram-n.svg";
  });

$("#email")
  .on("mouseenter", () => {
    emailImg.src =
      "https://fotos-yvv.s3.us-east-1.amazonaws.com/Iconos-Findea/mail-a.svg";
  })
  .on("mouseleave", () => {
    emailImg.src =
      "https://fotos-yvv.s3.us-east-1.amazonaws.com/Iconos-Findea/mail-n.svg";
  });

let operacion = 0,
  counter = 0,
  widthImg = 100 / sliderSection.length;

$(".btn-left").on("click", () => {
  counter = (counter - 1 + sliderSection.length) % sliderSection.length;
  operacion = counter * widthImg;

  slider.style.transform = `translate(-${operacion}%)`;
  slider.style.transition = "all ease .6s";

  posicionar();
});

$(".btn-right").on("click", () => {
  counter = (counter + 1) % sliderSection.length;
  operacion = counter * widthImg;

  slider.style.transform = `translate(-${operacion}%)`;
  slider.style.transition = "all ease .6s";

  posicionar();
});

function posicionar() {
  positioner.forEach((pos, index) => {
    pos.style.background = index === counter ? "var(--azul-claro)" : "white";
  });
}

$("#hamburger").on("change", function () {
  if (hamburgerCheckbox.checked) {
    body.classList.add("no-scroll");
  } else {
    body.classList.remove("no-scroll");
  }
});

function volver() {
  window.history.back();
}