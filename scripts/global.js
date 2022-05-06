document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

$(window).on('load resize orientationchange', function() {
    $('.media-campaign__slider').each(function(){
        var $carousel = $(this);
        if ($(window).width() > 1199) {
            if ($carousel.hasClass('slick-initialized')) {
                $carousel.slick('unslick');
            }
            if($('.media-campaign__slider-item').length > 3) {
                $('.media-campaign__slider-item:nth-of-type(3n)').nextAll('.media-campaign__slider-item').addClass('uk-margin-large-top');
            } else{
                $('.media-campaign__slider-item').removeClass('uk-margin-large-top');
            }
        }
        else{
            if (!$carousel.hasClass('slick-initialized')) {
                $carousel.slick({
                    slidesToShow: 1.3,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false,
                    arrows: false
                });
            }
        }
    });
});

$(document).ready(function() {
    $('.search-button').click(function (e) {
        var $form = $(this).closest("form");
        if (!$('.uk-search-input').val() == "") {
             $($form).submit();
        }
    });
    
    //Submissions Page
    $('.submissions-list__hidden').hide();
  
    $(".submissions-list__cta a").click(function() {
        const submissionList = '.submissions-list__hidden';
        $(this).closest('.resources-list__content-list').find(submissionList).slideToggle(200);

        $(this).toggleClass('submissions-list__cta--active');
    });
});