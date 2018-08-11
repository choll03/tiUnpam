jQuery(window).scroll(function () {
var top = jQuery(document).scrollTop()+150;
var height = $('#md8').offset().top;
var final = height + $('#md8').height();
var side_bottom = top + $('#side').height();
var stop = final - $('#side').height();
if (top > height) {
    if(side_bottom >= final ){
        $('.fixed').addClass('stop');
        $('.stop').css('top',stop);
    }
    if(side_bottom < final ){
        $('.fixed').css('top','140px');
        $('.fixed').removeClass('stop');
        $('#side').addClass('fixed');
        $('#side').addClass('col-md-offset-8');
    }
    
} else {
    $('.fixed').css('top','0px');
    $('#side').removeClass('fixed');
    $('#side').removeClass('col-md-offset-8');
}
});
$('ul.nav li.dropdown').hover(function() {
  $(this).find('.sub1').stop(true, true).delay(200).fadeIn(500);
}, function() {
  $(this).find('.sub1').stop(true, true).delay(200).fadeOut(500);
});
$('ul.nav li.dropdown li.dropdown').hover(function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
}, function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
});
$(".preload").fadeOut(2000, function() {
    $("#content").fadeIn(500);        
});
function href(file){
  window.location.href = file;
}