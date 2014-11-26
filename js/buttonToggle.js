//by Angel Leal - April 27, 2009
//requires jQuery - currently using 1.10.1

//modified to work with questions sh/hd and header categories


	// document.onreadystatechange = function () {
	// if (document.readyState == "ready") {
	//     if(window.location.hash){
	//       console.log(window.location.hash);
	//       var htag = window.location.hash;
	//       htag = htag.substring(1, htag.length);
	//       var htag2 = htag + "b";
	//       switchid(htag, htag2);
	//     }
	// }
	// }
   


$(function() { //ready function
	$('.hiddenBlock').hide();
	$('.qHeading').hide();
	$('.qHeading').first().show();

	if(window.location.hash){
		//use cat name hash to launch an onClick for that button.... due to 'this' keyword
		var htag = window.location.hash;
		htag = htag.substring(1, htag.length);
		var htag2 = htag + "b";
		//console.log(htag+" "+htag2);
		//switchid(htag, htag2);
	}

});
function switchCat(id, cat) {
	// console.log(id2);
	if (!$(id).hasClass('activeLink')) {
		sh_close();
		$('.qHeading').hide();
		$('.catHeaderToggle a').removeClass('activeLink');
		$(id).addClass('activeLink');
		$("#"+cat).slideDown();
	}

}

function sh_toggle(id1) {
	$(id1).parent().toggleClass('onFull');
	$(id1).parent().next().slideToggle();
	$(id1).children().fadeToggle();
}

function sh_all() {
	$('.ButtonToggle').addClass('onFull');
	$('.hiddenBlock').slideDown();
	$('.closeX').fadeIn();
}

function sh_close() {
	$('.ButtonToggle').removeClass('onFull');
	$('.hiddenBlock').slideUp();
	$('.closeX').fadeOut();
}