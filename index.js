const navbarScroll = (scrollTop) => {
  $('html, body').animate({
    scrollTop: scrollTop
  }, 1300);
}

$(document).ready(() => {
  $(this).scrollTop(0);
});

$(document).ready(() => {
  $('#bg').animate({height: `1000px`}, 1500);
  $('#bg-text').animate({opacity: 1}, 1000);
});

$('#general-info-button').click(() => {
  navbarScroll($('#general-info-block').offset().top - 56);
});

$('#nav-barber-button').click(() => {
  navbarScroll(0);
});

$(window).scroll(() => {
  let scrollTop = $(window).scrollTop();
  
  if (scrollTop > $('#bg').height()/4) {
    $('#header').animate({opacity: `1`}, 1500)
  }

  if (scrollTop > $('#general-info-block').offset().top/2 && $('#bg').height() > $('#bg').height()/2) { 
    $('#general-info-block').animate({opacity: 1}, 1000);

    $('#first-info').animate({
      opacity: 1,
      right: '0px'
    }, 2000);

    $('#col-img-1').animate({
      opacity: 1
    }, 1000)

    setTimeout(() => {
      $('#second-info').animate({
        opacity: 1,
        left: '0px'
      }, 2000);
  
      $('#col-img-2').animate({
        opacity: 1
      }, 1000)
    }, 1000)
  }

  if (scrollTop > $('#second-info').offset().top - 100) {
    for (let i = 1; i <=4; i++) {
      $(`#card-price-${i}`).animate({
        opacity: 1,
        top: '-10px'
      }, 1000*i)
    }
  }
});