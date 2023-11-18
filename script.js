$(document).ready(function(){
    $("p").on("click",function(){
        alert("The Element has been clicked");
    });
    $("button").click(function(){
        $("p").off("click");
    }); 
})

$(document).ready(function(){
    $("h1").one("click dblclick",function(){
$(this).animate({fontsize:"+=6px"});
    });
});