const positioner = document.querySelectorAll(".position"),
  slider = document.querySelector("#slider"),
  body = document.body,
  hamburgerCheckbox = document.getElementById("hamburger"),
  sliderSection = document.querySelectorAll(".slider-section"); //Esto devuelve una nodelist con los 3 section

function changeImageOnHover(id, baseUrl, iconName) {
  $("#" + id)
    .on("mouseenter", () => {
      //Imagen azul
      $("#" + id).attr("src", `${baseUrl}/${iconName}-a.svg`);
    })
    .on("mouseleave", () => {
      //Imagen negra
      $("#" + id).attr("src", `${baseUrl}/${iconName}-n.svg`);
    });
}

const baseUrl = "https://fotos-yvv.s3.us-east-1.amazonaws.com/Iconos-Findea";

changeImageOnHover("pinterest", baseUrl, "pinterest");
changeImageOnHover("facebook", baseUrl, "facebook");
changeImageOnHover("instagram", baseUrl, "instagram");
changeImageOnHover("email", baseUrl, "mail");

let operacion = 0,
  counter = 0,
  widthImg = 100 / sliderSection.length;

$(".btn-left, .btn-left-peq").on("click", () => {
  counter = (counter - 1 + sliderSection.length) % sliderSection.length;
  operacion = counter * widthImg;

  slider.style.transform = `translate(-${operacion}%)`;
  slider.style.transition = "all ease .6s";

  posicionar();
});

$(".btn-right, .btn-right-peq").on("click", () => {
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

$("#atras").on("click", function () {
  window.history.back();
})

$(".bac-rojo")
  .on("mouseleave", function () {
    $(this).css("background-color", "#FF0C01");
  })
  .on("mouseenter", function () {
    $(this).css("background-color", "#A40700");
  });

$(".bac-azul")
  .on("mouseleave", function () {
    $(this).css("background-color", "#188DFA");
  })
  .on("mouseenter", function () {
    $(this).css("background-color", "#2B538F");
  });

  $("#flec-select").on("click", function() {
    var currentTransform = $("#flec-select > img").css("transform");

    if (currentTransform != "matrix(1, 0, 0, 1, 0, 0)") {
        $("#flec-select > img").css("transform", "rotate(0deg)");
    } else {
        $("#flec-select > img").css("transform", "rotate(180deg)");
    }
   
    // Muestra u oculta el menú de la lista
    $("#todas-listas").toggle();
});
