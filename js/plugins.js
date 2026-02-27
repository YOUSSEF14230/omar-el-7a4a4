$(document).ready(function(){

    $("div").hide()
    $("p").hide()
    $(".goog").hide()
    $(".ce").click(function(){
    $(this).fadeOut(1500)
    $("div").show(function(){
    $(this).addClass("me")    
    $(".goog").fadeIn(5000)
    })
    })
    
    $(".goog").click(function(){
        $(this).fadeOut()
        $("P").show()
        $("P").animate({
            left:'900px'
        } , 2000)
    })
    })
