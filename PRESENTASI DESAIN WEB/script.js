// HOME
$(document).ready(function(){
    $(".navbaar h6").hover(function(){
        $(this).find("ul").slideToggle("slow")
    });
});

// RESERVATION 
$(document).ready(function(){
    $("#box2").hide();
    $("#res").click(function(){
        $("#box1").hide("0.5s");
        $("#box2").show("0.5s");
    });
});