//Window Scroll
var body = document.getElementById("main-body");
var navbar = document.getElementById("header-navbar");
var menu = document.getElementById("menu-scroll-point");
function scollUpFunc() {
   window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
   });
}

window.onscroll = function () {
   if (window.pageYOffset >= menu.offsetTop) {
      navbar.classList.add("sticky");
   } else {
      navbar.classList.remove("sticky");
   }
};

//Right Navbar handle
var rightNavbar = document.getElementById("right-navbar");

function showMenu() {
   rightNavbar.classList.add("active-right-navbar");
}
function hideMenu() {
   rightNavbar.classList.remove("active-right-navbar");
}
//Mobile Sub menu handle
var mobileNavbarSwitch;
var subMenuMobile = document.getElementById("sub-menu-mobile");
function showMenuMobile() {
   if (mobileNavbarSwitch != true) {
      subMenuMobile.classList.add("active-right-navbar-mobile");
      mobileNavbarSwitch = true;
   } else if (mobileNavbarSwitch != false) {
      subMenuMobile.classList.remove("active-right-navbar-mobile");
      mobileNavbarSwitch = false;
   }
}

var mobileSubMenubtn = document.getElementById("sub-menu-mobile-our-programme");
var mobileSubMenubtnSwitch;
function dropSubMenuMobile() {
   if (mobileSubMenubtnSwitch != true) {
      mobileSubMenubtn.classList.add("sub-menu-mobile-our-programme--active");
      mobileSubMenubtnSwitch = true;
   } else if (mobileSubMenubtnSwitch != false) {
      mobileSubMenubtn.classList.remove(
         "sub-menu-mobile-our-programme--active"
      );
      mobileSubMenubtnSwitch = false;
   }
}

// magnificPopup init
var imagepopup = $(".gallery__image-popup");
if (imagepopup.length) {
   $(".gallery__image-popup").magnificPopup({
      type: "image",
      callbacks: {
         beforeOpen: function () {
            this.st.image.markup = this.st.image.markup.replace(
               "mfp-figure",
               "mfp-figure animated zoomInDown"
            );
         },
      },
      gallery: {
         enabled: true,
      },
      autoFocusLast: false,
   });
}

//Scroll top
$(document).ready(function () {
   $(window).scroll(function () {
      if ($(this).scrollTop() > 150) {
         $("#scroll").fadeIn();
      } else {
         $("#scroll").fadeOut();
      }
   });
   $("#scroll").click(function () {
      $("html, body").animate({ scrollTop: 0 }, 600);
      return false;
   });
});

//aos handle
AOS.init({
   once: true,
   duration: 2000,
});

//owl testimonial - phuongle
$('.owl-carousel').owlCarousel({
   items:2,
   lazyLoad:true,
   loop:true,
   margin:10,
   autoplay:true,
   autoplayTimeout:8000,
   autoplayHoverPause:true,
   responsive:{
   0:{
       items:1,
       nav:true
   },
   768:{
       items:2,
       nav:true,
       loop:true
   }
   }
 });

 //wow INIT
 new WOW().init();

 //window load
$(window).on("load", function () {
   $("#loading").delay(1000).fadeOut(500);
   $("#loading-center").on("click", function () {
      $("#loading").fadeOut(500);
   });
});

// video
if ($(".player").length) {
   $(".player").YTPlayer();
}

// Get a quote popup
var popupquote = $(".popup-quote");
if (popupquote.length) {
   $(".popup-quote").magnificPopup({
      type: "inline",
      preloader: false,
      focus: "#qname",
      removalDelay: 500,
      callbacks: {
         beforeOpen: function () {
            this.st.mainClass = this.st.el.attr("data-effect");
            if (win.width() < 800) {
               this.st.focus = false;
            } else {
               this.st.focus = "#qname";
            }
         },
      },
   });
}

//preloader
$(window).on("load", function () {
   $("#loader").delay(1000).fadeOut(500);
});

//Videos popup jQuery
var popupvideos = $(".popup-videos");
if (popupvideos.length) {
   $(".popup-videos").magnificPopup({
      disableOn: 10,
      type: "iframe",
      mainClass: "mfp-fade",
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false,
   });
}