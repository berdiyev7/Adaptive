function testWebP(callback) {

   var webP = new Image();
   webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
   };
   webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

$(document).ready(function () {
   $('.header-burger').click(function (event) {
      $('.header-burger,.header-menu').toggleClass('active');
      $('.body').toggleClass('lock');
   });
});

//$(document).on("scroll", function () {
//   if ($(window).scrollTop() === 0)
//      $("header").removeClass("fixed");
//   else
//      $("header").attr("class", "fixed");
//});
