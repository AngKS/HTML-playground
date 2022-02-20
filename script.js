$(document).ready(function () {

    $('#sidebar-collapse').on('click', function () {
        $('.sidebar').toggleClass('active');

        // change the icon of the button
        if ($('.sidebar').hasClass('active')) {
            $('#sidebar-collapse').find('i').removeClass('fa-arrow-left').addClass('fa-bars');
        } else {

        }
    });

});