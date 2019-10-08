const navbarScroll = (scrollTop) => {
  $('html, body').animate({
    scrollTop: scrollTop
  }, 1300);
}

$(document).ready(() => {
  $('#bg').animate({height: `1000px`}, 1500);
  $('#bg-text').animate({opacity: 1}, 1000);
  
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

  if (scrollTop > $('#bg').height()/4) {
    $('#header').animate({opacity: `1`}, 1500)
  }

  if (scrollTop > $('#general-info-block').offset().top/2 && $('#bg').height() > $('#bg').height()/2) { 
    $('#general-info-block').animate({opacity: 1}, 1000);

    $("#first-info").animate({
      opacity: 1,
      left: "100px"
    }, 2000);

    $("#col-img-1").animate({
      opacity: 1
    }, 1000)

    setTimeout(() => {
      $("#second-info").animate({
        opacity: 1,
        left: "-100px"
      }, 2000);
  
      $("#col-img-2").animate({
        opacity: 1
      }, 1000)
    }, 1000)
  }
});