$(document).ready(function() {
    /* ___________________ start home page ___________________ */
    
    // ... header secction
    $(".menu_toggleBtn,.header_backDrop").click(function() {
        $(".header").toggleClass("active_header");
    });

    function checkScroll() {
        if ($(window).scrollTop() > 50) {
            $("body").addClass('scrolled_header');
        } else {
            $("body").removeClass('scrolled_header');
        }
    }
    checkScroll();
    $(window).on('scroll', function() {
        checkScroll();
    });
    

    // ... otp form control 
    $("#otp").pincodeInput({
        hidedigits: false, 
        inputs: 6,
        keydown: function(){

            // disable submit button
            $("#otpModal .submit_btn").addClass("disabled");
        },
        complete: function (value, e, errorElement) {
            if(value==="123456"){
                $("#otpModal").removeClass("invalidOTP");
                $("#otpModal .submit_btn").removeClass("disabled");
            }else{
                $("#otpModal").addClass("invalidOTP");
                $("#otpModal .submit_btn").addClass("disabled");
            }
        }
    });
    /* ___________________ end home page ___________________ */
});