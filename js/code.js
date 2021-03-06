$(document).ready(function () {    
    
    //Navigation tabs animations
    $('.hvr-sweep-to-right').on('mouseover', function(){
        $(this).closest('li').find('.extra').addClass('widthMax');
    });
    $('.hvr-sweep-to-right').on('mouseout', function(){
        $('.extra').removeClass('widthMax');
    });
    
    $('#logo').on('click', function(){
        $('.big').find('li').fadeOut('slow');
        $('.extra').removeClass('widthMaxClick');
    });
    
    
    $('.hvr-sweep-to-right').on('click', function(){
        $('.extra').removeClass('widthMaxClick');
        $(this).closest('li').find('.extra').addClass('widthMaxClick');
    });

    
    $('#aboutT').on('mouseover', function(){
        $(this).find('.aboutSub').slideDown('slow');
    });
    $('#aboutT').on('mouseleave', function(){
        $(this).find('.aboutSub').slideUp('fast');
    });
    
    
    
    //------------------------ GOOGLE MAPS --------------------
    function initialize() {
        console.log("initialize");
      var mapProp = {
        center:new google.maps.LatLng(41.39442,-70.530925),
        zoom:12,
        mapTypeId:google.maps.MapTypeId.ROADMAP
      };
      var map=new google.maps.Map(document.getElementById("map"), mapProp);




        // Creating a marker and positioning it on the map
        marker = new google.maps.Marker({
            map: map,
            position: new google.maps.LatLng(41.39442,-70.530925)
        });
        infowindow = new google.maps.InfoWindow({
            content: "<b>Shear Inspiration</b><br/>12 Mariners Way<br/> Edgartown"
        });
        google.maps.event.addListener(marker, "click", function () {
            infowindow.open(map, marker);
        });
        infowindow.open(map, marker);
        
}
    initialize();// End of marker
    //----------------------------END OF GOOGLE MAPS---------------------
    

    //Navigation algorithms

    $('.navigation').on('click','#homeT',function(){
        $('.big').find('li').fadeOut('slow');
        $('#home').slideDown('slow');
    });
    $('.navigation').on('click','#aboutT',function(){
        $('.big').find('li').fadeOut('slow');
        $('#about').slideDown('slow');
    });
    
    $('.navigation').on('click','#servicesT',function(){
        $('.big').find('li').fadeOut('slow');
        $('#services').slideDown('slow');
    });
    $('.navigation').on('click','#portfolioT',function(){
        $('.big').find('li').fadeOut('slow');
        $('#portfolio').slideDown('slow');
    });

    $('.navigation').on('click','#weddingsT',function(){
        $('.big').find('li').fadeOut('slow');
        $('#weddings').slideDown('slow');
    });
    $('.navigation').on('click','#contactsT',function(){
        $('.big').find('li').fadeOut('slow');
        $('#contacts').slideDown('slow');
        initialize();// End of marker
    });
    $('.navigation').on('click','#historyT',function(event){
        $('.big').find('li').fadeOut('slow');
        $('#history').slideDown('slow');
        event.stopPropagation();
    });
    $('.navigation').on('click','#staffT',function(event){
        $('.big').find('li').fadeOut('slow');
        $('#staff').slideDown('slow');
        event.stopPropagation();
    });
    //End of navigation algorithms




    $('.navigation').on('click','#homeT',function(){
        //body, css(backgorund - url change)
        $('body').css('background-image','url(images/background1.jpg)');
    });
    $('.navigation').on('click','#aboutT', function(){
        //body, css(backgorund - url change)
        $('body').css('background-image','url(images/background2.jpg)');
    });
    $('.navigation').on('click','#servicesT', function(){
        //body, css(backgorund - url change)
        $('body').css('background-image','url(images/background3.jpeg)');
    });
    $('.navigation').on('click','#weddingsT', function(){
        //body, css(backgorund - url change)
        $('body').css('background-image','url(images/background4.jpg)');
    });
    $('.navigation').on('click','#contactsT', function(){
        //body, css(backgorund - url change)
        $('body').css('background-image','url(images/backgroundC.jpg)');
    });
    
    
    
    
});