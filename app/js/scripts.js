//=============================================
//           JQUERY DOCUMENT READY            =
//=============================================
$("document").ready(function() {

    // Side Navbar Functionality
    if ($(window).outerWidth() > 992) {
        $('nav.side-navbar').hover( 
            function () { 
                $(this).removeClass('shrink'); 
                $('.page').removeClass('active');
            }, 
            function () { 
                $(this).addClass('shrink');
                $('.page').addClass('active');
            } 
        );
    }

    // Side Navbar Mobile
    $('#toggle-btn-open').on('click', function (e) {
        e.preventDefault();
        if ($(window).outerWidth() < 992) {
            $('nav.side-navbar').toggleClass('shrink');
            $(this).toggleClass('active');
        } else {
            return false;
        }
    });

    // External links to new window
    $('.external').on('click', function (e) {
        e.preventDefault();
        window.open($(this).attr("href"));
    });

    // Box search show more
    $(".btn-show-more-search").on("click", function() {
        $(".box-more-search").toggleClass("active");
        $(this).toggleClass("active");
    });

    // Box search Mobile
    $('#btn-toggle-search').on('click', function (e) {
        e.preventDefault();
        if ($(window).outerWidth() < 576) {
            $('.box-toggle-search').addClass('active');
        }
    });
    $('.remove-toggle-search').on('click', function (e) {
        e.preventDefault();
        if ($(window).outerWidth() < 576) {
            $('.box-toggle-search').removeClass('active');
        }
    });

    resize();
    
});//document.ready

//=============================================
//           JQUERY WINDOW RESIZE            =
//=============================================
$(window).on('resize', resize);
function resize() {

    if ($(window).outerWidth() > 992) {
        $('nav.side-navbar').addClass('shrink');
    } else {
        $('nav.side-navbar').removeClass('shrink');
    }

} //windows.resize


//=============================================
//             JQUERY WINDOW LOAD            ==
//=============================================
$(window).on('load', function(){






}); //windows.load



//=============================================
//    Add/Remove column datatable display
//=============================================
// add all column to current list
$('body').on('click', 'button.add-all', function(){
    $(this).removeClass('add').addClass('disabled');
    var element = $('#allColumn').each(function(){
        var li_element = $(this).html();
        $('#currentColumn').append(li_element);
    });
    $('#allColumn').find('.li').remove();
    $('#currentColumn').find('.li button').removeClass('add').addClass('remove');
});

// remove all column to current list
$('body').on('click', 'button.remove-all', function(){
    // $(this).removeClass('remove').addClass('disabled');
    var element = $('#currentColumn').each(function(){
        var li_element = $(this).html();
        $('#allColumn').append(li_element);
        $('#allColumn').find('.li.fixed').remove();
    });
    $('#currentColumn').find('.li:not(".fixed")').remove();
    $('#allColumn').find('.li button').removeClass('remove').addClass('add');
});

// add column current list
$('body').on('click', '#allColumn button', function(){
    $(this).removeClass('add').addClass('remove');
    var element = $(this).parents('.li').html();
    var target = $('#currentColumn');

    target.append('<li class="li">'+element+'</li>');
    $(this).parents('.li').remove();
});

// remove column current list
$('body').on('click', '#currentColumn .li:not(".fixed") button', function(){
    $(this).removeClass('remove').addClass('add');
    var element = $(this).parents('.li').html();
    var target = $('#allColumn');

    target.append('<li class="li">'+element+'</li>');
    $(this).parents('.li').remove();
});


//=============================================
//    Datalist input
//=============================================

var dataList = document.getElementById('json-datalist');
var input = document.getElementById('ajax');

var request = new XMLHttpRequest();

request.onreadystatechange = function(response) {
  if (request.readyState === 4) {
    if (request.status === 200) {

        var jsonOptions = JSON.parse(request.responseText);
        jsonOptions.forEach(function(item) {
            var option = document.createElement('option');
            option.value = item;
            dataList.appendChild(option);
        });
      
        input.placeholder = "e.g. datalist";
    } else {
        input.placeholder = "Couldn't load datalist options :(";
    }
  }
};

input.placeholder = "Loading options...";

request.open('GET', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/4621/html-elements.json', true);
request.send();
