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

$(function () {
  var SliderModule = (function () {
    var pb = {};
    pb.elslider = $('#slider');
    pb.items = {
      panels: pb.elslider.find('.slider-wrapper > li'),
    };

    var SliderInterval,
      currentSlider = 0,
      lengthSlider = pb.items.panels.length;

    pb.init = function () {
      var loscontroles = '';
      SliderInit();

      // Generar los controles de navegaciÃ³n
      for (var i = 0; i < lengthSlider; i++) {
        loscontroles += '<li' + (i === 0 ? ' class="active"' : '') + '></li>';
      }
      $('#control-buttons').html(loscontroles);

      // AcciÃ³n al hacer clic en un control
      $('#control-buttons li').click(function () {
        var index = $(this).index();
        if (currentSlider !== index) {
          cambiarPanel(index);
        }
      });

      $(".slider-wrapper li").on("mouseenter", function () {
        clearInterval(SliderInterval);
      });

      $(".slider-wrapper li").on("mouseleave", function () {
        SliderInit();
      });

      // AcciÃ³n al hacer clic en los botones
      $(".btn-left, .btn-left-peq").on("click", function () {
        changePanel(-1);  // Mover a la izquierda
      });

      $(".btn-right, .btn-right-peq").on("click", function () {
        changePanel(1);  // Mover a la derecha
      });

      // Mostrar imagen al hacer hover sobre el control
      $('#control-buttons li').on("mouseenter", function () {
        var index = $(this).index();
        var imgSrc = pb.items.panels.eq(index).find('img').attr('src');
        $('#preview-img > img').attr('src', imgSrc);
        $('#preview-img').show();
      });

      $('#control-buttons li').on("mouseleave", function () {
        $('#preview-img').hide();
      });
    };

    var SliderInit = function () {
      SliderInterval = setInterval(pb.startSlider, 3000);
    };

    pb.startSlider = function () {
      var nextSlider = (currentSlider + 1) % lengthSlider;
      slideToNext(nextSlider);
    };

    var slideToNext = function (nextSlider) {
      var paneles = pb.items.panels;
      var controles = $('#control-buttons li');

      controles.removeClass('active');
      controles.eq(nextSlider).addClass('active');

      pb.elslider.find('.slider-wrapper').finish().animate({
        'margin-left': '-' + (nextSlider * 100) + '%'
      }, 500);

      currentSlider = nextSlider;
    };

    var changePanel = function (num) {
      clearInterval(SliderInterval);

      var nextSlider = (currentSlider + num + lengthSlider) % lengthSlider;
      slideToNext(nextSlider);
      SliderInit();
    };

    var cambiarPanel = function (indice) {
      clearInterval(SliderInterval);

      var controles = $('#control-buttons li');
      controles.removeClass('active');
      controles.eq(indice).addClass('active');

      pb.elslider.find('.slider-wrapper').animate({
        'margin-left': '-' + (indice * 100) + '%'
      }, 500);

      currentSlider = indice;
      SliderInit();
    };

    return pb;
  }());

  SliderModule.init();
});


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

$("#flec-select").on("click", function () {
  var currentTransform = $("#flec-select > img").css("transform");

  if (currentTransform != "matrix(1, 0, 0, 1, 0, 0)") {
    $("#flec-select > img").css("transform", "rotate(0deg)");
  } else {
    $("#flec-select > img").css("transform", "rotate(180deg)");
  }

  // Muestra u oculta el menÃº de la lista
  $("#todas-listas").slideToggle(200);
});

function irHasta(nombre) {
  window.location.href = "https://findea-web.s3.us-east-1.amazonaws.com/src/" + nombre;
}
