

// BODY ELEMENTS
var Body = $("body");
var TemplateSidebar = $('.sidebar');
var TemplateHeader = $('.t-header');
var PageContentWrapper = $(".page-content-wrapper");
var DesktopToggler = $(".t-header-desk-toggler");
var MobileToggler = $(".t-header-mobile-toggler");

// SIDEBAR TOGGLE FUNCTION FOR MOBILE (SCREEN "MD" AND DOWN)
MobileToggler.on("click", function () {
  $(".page-body").toggleClass("sidebar-collpased");
});



$(".btn.btn-refresh").on("click", function () {
  $(this).addClass("clicked");
  setTimeout(function () {
    $(".btn.btn-refresh").removeClass("clicked");
  }, 3000);
});

