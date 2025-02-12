$(function () {
  $("section > div > div").on("click", function () {
    $(this).parent().next(".texto").finish().slideToggle(400);
    $(this).children().last().finish().fadeToggle(100);
  });
  $(".texto").hide();
});
