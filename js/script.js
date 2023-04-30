$('.lviv').click(function(){
  $('.kyiv,.window-registration__kyiv-window,.window-registration__btn-confirm').removeClass('active')
  $('.lviv,.window-registration__lviv-window,.window-registration__btn-confirm').toggleClass('active')
})
$('.kyiv').click(function(){
  $('.lviv,.window-registration__lviv-window,.window-registration__btn-confirm').removeClass('active')
  $('.kyiv,.window-registration__kyiv-window,.window-registration__btn-confirm').toggleClass('active')
})