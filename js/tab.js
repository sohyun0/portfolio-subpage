$(document).ready(function() {
  var tabSlide = ".design-mini-slide>li";
  var tabImg = ".design-img>img";
  tabSlide.on("click", function() {
    var i = $(this).index();
    tabSlide.removeClass(on);
  });
});
