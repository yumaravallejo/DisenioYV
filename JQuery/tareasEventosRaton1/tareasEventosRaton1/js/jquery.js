$(function () {
  $("article.noticia > img")
    .on("mouseenter", function () {
      $(this.nextElementSibling).css("display", "flex");
    })
    .on("mouseleave", function () {
      $(this.nextElementSibling).css("display", "none");
    });

  //Otro método
  $("#news").on("mouseenter, mouseleave", "img", function () {
    $(this).siblings("h3").toggle();
  });

  //hover, clic y doble click
  $("article.noticia > img")
    .on("mouseenter, mouseleave", function () {
      $(this).siblings("h3").toggle();
    })
    .on("click", function () {
      $(this).siblings("h3").css("display", "flex");
    })
    .on("dblclick", function () {
      $(this).siblings("h3").css("display", "none");
    });

  //keyup, keydown, keypress
  //Es necesario poner el document porq es el que va a recibir esa tecla
  $(document).on("keypress", function (e) {
    e.preventDefault;
    //e.which devuelve el código ascii
    console.log(e.which);

    if (String.fromCharCode(e.which) == "d")
      $("article.noticia > img").siblings("h3").toggle();
  });

  //focusin, focus, focusout(afecta a los ascendentes e hijos), blur(especifico)
  //Más usado en formularios
  $("#email")
    .on("focusin", function () {
      $(this).css("outline", ".2rem solid lightblue");
    })
    .on("focusout", function () {
      $(this).css("outline", "none");
    });
});
