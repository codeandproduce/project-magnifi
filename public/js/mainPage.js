$(window).scroll(function(){
	parallax();
});

function parallax(){
	var scroll = $(window).scrollTop();
	$(".bg-img").css("background-position", "center "+scroll*0.035+"px");
}

var menuButtonClicked = false;
$('.menu-button').click(function(){
	console.log('click');
  if(!menuButtonClicked){
    $('.contain-menu').css('right','0');
    $('.side-menu-left').css('transform','translate(8px,12px) rotate(45deg)');
    $('.side-menu-right').css('transform',' translate(8px,-12px) rotate(-45deg)');
    $('.middle-menu').css('width','0');
    menuButtonClicked = true;
  }else{
    $('.contain-menu').css('right','-100%');
    $('.side-menu-left').css('transform','none');
    $('.side-menu-right').css('transform','none');
    $('.middle-menu').css('width','100%');
    menuButtonClicked = false;
  }
});

var dropDownAClicked = false;
$('.dropdown-a').click(function(e){
	if(!dropDownAClicked){
		e.preventDefault();
		$('.dropdown-a-ul').css('display','block');
		$('.dropdown-a').css('text-decoration','underline');
		dropDownAClicked = true;
	}else{
		$('.dropdown-a-ul').css('display','none');
		$('.dropdown-a').css('text-decoration','none');

		dropDownAClicked = false;
	}
});
