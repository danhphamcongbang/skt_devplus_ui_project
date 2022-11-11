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
