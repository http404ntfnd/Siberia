$(document).ready(function(){
    $('.intro__slider').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        dots: true,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),

        responsive: [
            {
                breakpoint: 1380,
                settings: {
                    slidesToShow: 4
    
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3
    
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 200,
                settings: {
                    slidesToShow: 1
                }
            }
            
        ]
    });
  });

  $('.menu-btn').on('click', function (e) {
    $(this).toggleClass('opened')
    $('.bottom__nav').slideDown();
                if ($(this).hasClass('opened')) {
    $('.bottom__nav').slideDown();
    } else $('.bottom__nav').slideUp();

            });

function map(initmap) {
    const coordinates = {lat: 55.044757, lng: 82.897426},
    markerImage = 'img/marker.png',
    zoom = 17,
    
   
    map = new google.maps.Map(document.getElementById('map'), {
        center: coordinates,
        zoom: zoom,
        disableDefaultUI: true
        
    });

  var  marker = new google.maps.Marker({
        position: coordinates,
        map: map,
        icon: markerImage,
    });

    marker.setAnimation(google.maps.Animation.BOUNCE);
    setTimeout(function(){ marker.setAnimation(null); }, 666666);
}
      
      map('initmap');

     
        
