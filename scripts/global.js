//add smooth scrolling when clicking any anchor link
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

$( ".media-campaign__slider").each(function() {        
    $(this).slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        infinite: false,
        responsive: [
            {
            breakpoint: 1199,
            settings: {
                    slidesToShow: 1.3,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false
                }
            }
        ]
    });
});

$(document).ready(function() {
    $('.search-button').click(function (e) {
        var $form = $(this).closest("form");
        $($form).submit();
    });
});
