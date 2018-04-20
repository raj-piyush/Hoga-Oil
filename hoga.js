var count=1;



setInterval(function()
{
	if(count==3)
	{
		count=1;
		document.getElementById("slide").src="http://www.strub-lube.com/temp/crop_715x329_0x74_resize_715x477_Schneidoel_in_aktion.jpg";
	}

	else if(count==1)
	{
		count++;
		document.getElementById("slide").src="http://www.strub-lube.com/temp/resize_715x329_STRUB_Hochregallager_100dpi4.jpg";

	}


	else if(count==2)
	{
		count++;
		document.getElementById("slide").src="http://www.protube.com.au/images/img03-large.png";
	}


}, 2000);


/*
CODE FOR FIXED NAVBAR ON SCROLL*/

$(document).ready(function() {
  //change the integers below to match the height of your upper dive, which I called
  //banner.  Just add a 1 to the last number.  console.log($(window).scrollTop())
  //to figure out what the scroll position is when exactly you want to fix the nav
  //bar or div or whatever.  I stuck in the console.log for you.  Just remove when
  //you know the position.
  $(window).scroll(function () {

    console.log($(window).scrollTop());

    if ($(window).scrollTop() > 300) {
      $('#nav_bar').addClass('navbar-fixed-top');
    }

    if ($(window).scrollTop() < 299) {
      $('#nav_bar').removeClass('navbar-fixed-top');
    }
  });
});

// CODE TO popup

var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var btn1 = document.getElementById("myBtn1");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modalv
btn.addEventListener("click",function(){

  modal.style.display = "block";

});
// btn.onclick = function() {
//     modal.style.display = "block";
// }

btn1.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var sub=document.getElementById("submit");
sub.onclick = function() {
  modal.style.display = "none";
}








