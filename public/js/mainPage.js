$(window).scroll(function(){
	parallax();
});

function parallax(){
	var scroll = $(window).scrollTop();
	$(".bg-img").css("background-position", "center "+scroll*0.035+"px");
}
