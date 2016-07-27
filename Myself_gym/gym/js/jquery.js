$(document).ready(function(){

    $(".image").mouseover(function(){
        $("#first,#second").css("height", "150px",
        						"width", "100px");
    });
    $(".image").mouseout(function(){
    	$("#first,#second").css("height", "120px",
    							"width", "50px");
    });
    $(".seconImage").mouseover(function(){
        $("#third,#fourth").css("height", "150px",
        						"width", "100px");
    });
    $(".seconImage").mouseout(function(){
    	$("#third,#fourth").css("height", "120px",
    							"width", "50px");
    });
});


