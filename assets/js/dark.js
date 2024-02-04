$(document).ready(function () {
    $('#darklight').change(function () {
        if ($(this).prop('checked')) {
            /*LIGHT MODE*/
           // $('body').css('background-color', '#f4f4f5');
            $(':root').css('--backgroundMain', '#f4f4f5');
            $('.navbar__brand').css('color', '#0e1111');
            $('.ioo').css('color', '#14121B');
            $('.active').css('color', '#0e1111');
            $(':root').css('--circleColor', '#73737326');
            $(':root').css('--backgroundSecond', '#F9F9F9');
        } else {
            /*DARK MODE*/
            //$('body').css('background-color', '#14121B');
            $(':root').css('--backgroundMain', '#14121B');
            $('.navbar__brand').css('color', '#fff');       
            $('.ioo').css('color', '#fff');       
            $('.active').css('color', '#fff');       
            $(':root').css('--circleColor', '#FFFFFF26');       
            $(':root').css('--backgroundSecond', '#181621');       
        }
    });
});