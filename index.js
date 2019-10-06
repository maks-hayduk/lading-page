const navbarScroll = (scrollTop) => {
  $('html, body').animate({
    scrollTop: scrollTop
  }, 1300);
}

$(document).ready(() => {
  $('#bg').animate({height: `1000px`}, 1500);
  $('#header').animate({opacity: `0.7`}, 1000);
  $('html, body').animate({
    scrollTop: 0
  }, 0);
});

$("#general-info-button").click(() => {
  navbarScroll($("#general-info-block").offset().top - 56);
});

$("#nav-barber-button").click(() => {
  navbarScroll(0);
});

$(window).scroll(() => {
  let scrollTop = $(window).scrollTop();
  if (scrollTop > $('#general-info-block').offset().top - 400 && $('#bg').height() > 400) { 
    $('#general-info-block').animate({opacity: 1}, 300)
  }
});