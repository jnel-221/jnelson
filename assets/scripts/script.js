const navbar = document.querySelector(".navbar");
const spot = document.querySelector(".spot");

const handleScroll = (entries) => {
  const spotIsVisible = entries[0].isIntersecting;
  spotIsVisible
    ? navbar.classList.remove("fixed-top")
    : navbar.classList.add("fixed-top");
};

const options = {
  root: null,
  rootMargin: "0px",
  threshhod: 0,
};

const observer = new IntersectionObserver(handleScroll, options);

observer.observe(spot);

$(document).ready(function () {
  /* Check width on page load*/
  if ($(window).width() > 380) {
    $(".fab").addClass("fa-2x");
  } else {
    $(".fab").removeClass("fa-2x");
  }
});

$(window).resize(function () {
  /*If browser resized, check width again */
  if ($(window).width() > 380) {
    $(".fab").addClass("fa-2x");
  } else {
    $(".fab").removeClass("fa-2x");
  }
});
