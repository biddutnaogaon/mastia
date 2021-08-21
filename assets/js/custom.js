$(document).ready(function() {
    //Owl Carousel
    $("#owl-demo").owlCarousel({
        autoPlay: 1000,
        items : 3,
        itemsDesktop : [1199,2],
        itemsDesktopSmall : [979,2]
    });
    //Owl Carousel

    //Counter up
    $(".counter").counterUp({
        delay: 10,
        time: 1200
    });
    // Counter Up


    // Projects
    $('.list').click(function(){
        const value = $(this).attr('data-filter');
        if(value == 'all') {
            $('.itemBox').show('fast');
        } else {
            $('.itemBox').not('.'+value).hide('fast');
            $('.itemBox').filter('.'+value).show('fast');
        }
    });

        // Add or Remove Active Class Bg Color
    $('.list').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    });
    //Projects End
});


//JavaScript Scripts

    //Start Owl Carousel Previous Next Btn Trigger
    var owl = $('.owl-carousel');
    owl.owlCarousel();
    // Go to the next item
    $('.owl-next').click(function() {
        owl.trigger('next.owl.carousel');
    })
    // Go to the previous item
    $('.owl-prev').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl.trigger('prev.owl.carousel', [300]);
    })
    //End Owl Carousel Previous Next Btn Trigger


    // Animation on Scroll Initiation
    AOS.init();
    

    // Form Validation
    // Example starter JavaScript for disabling form submissions if there are invalid fields
    (function () {
        'use strict'
  
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.querySelectorAll('.needs-validation')
    
        // Loop over them and prevent submission
        Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()
  
    