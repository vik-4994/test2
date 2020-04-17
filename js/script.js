$(document).ready(function(){
            $("#header_left_menu").on("click","a", function (event) {
                event.preventDefault();
                var id  = $(this).attr('href'),
                    top = $(id).offset().top;
                $('body,html').animate({scrollTop: top}, 1500);
            });
        });


        $(document).ready(function () {
            var offset = $('#fixed').offset();
          var topPadding = 0;
          $(window).scroll(function() {
              if ($(window).scrollTop() > offset.top) {
                  $('#fixed').stop().animate({marginTop: $(window).scrollTop() - offset.top + topPadding});
              }
              else {
                  $('#fixed').stop().animate({marginTop: 0});
              }
          });
      });


      var block = document.getElementById('header_left_menu_li_block');
      var hg = document.getElementById('header_left_menu_li_a').onfocus = function()