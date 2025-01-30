$(function () {
  $("article.noticia > img")
    .on("mouseenter", function () {
      $(this.nextElementSibling).css("display", "flex");
    })
    .on("mouseleave", function () {
      $(this.nextElementSibling).css("display", "none");
    });
});

//Otro método
$(function () {
  $("#news").on("mouseenter, mouseleave", "img", function () {
    $(this).siblings("h3").toggle();
  });
});

$(function () {
    $("article.noticia > img").on("mouseenter, mouseleave", function () {
      $(this).siblings("h3").toggle();
    });
});

$(function () {
    $("article.noticia > img").on("click", function () {
      $(this).siblings("h3").toggle();
    });
});
