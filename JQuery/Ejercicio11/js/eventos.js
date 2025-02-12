$(function () {
  $("section > div > div").on("click", function () {
    $(this).parent().next(".texto").slideToggle(400);
    $(this).children().last().fadeToggle(100);
  });
  $(".texto").hide();
});

