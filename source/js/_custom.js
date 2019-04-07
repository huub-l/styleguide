$(document).ready(function() {
  $(".js-toggle-icon").each(function (index, element) {
    $(this).click(function (e) { 
      e.preventDefault();
        $(this).toggleClass("show");
    });
  });
});
