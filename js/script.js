$(document).ready(function () {

  var clickEvent = false;
  $('#myCarousel').carousel({
    interval: 4000
  }).on('click', '.list-group li', function () {
    clickEvent = true;
    $('#nameGroup li').removeClass('active');
    $(this).addClass('active');
  }).on('slid.bs.carousel', function (e) {
    if (!clickEvent) {
      var count = $('#nameGroup').children().length - 1;
      var current = $('#nameGroup li.active');
      current.removeClass('active').next().addClass('active');
      var id = parseInt(current.data('slide-to'));
      console.log('count ' + count + ' id ' + id);
      if (count == id) {
        $('#nameGroup li').first().addClass('active');
      }
    }
    clickEvent = false;
  });
});

$(window).load(function () {
  var boxheight = $('#myCarousel .carousel-inner').innerHeight();
  var itemlength = $('#myCarousel .item').length;
  var triggerheight = Math.round(boxheight / itemlength + 1);
  $('#myCarousel .list-group-item').outerHeight(triggerheight);
});
