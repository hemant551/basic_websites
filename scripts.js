var onColor = "yellow"; //Color applied to links in leftnav after OnMouseOver event
var outColor = "#333"; //Color applied to links in leftnav after OnMouseOut event
var bannerSwitch = 1;
var bannerBg = new Array();
bannerBg[0] = "url('1.jpg')";
bannerBg[1] = "url('2.jpg')";
bannerBg[2] = "url('3.jpg')";

function highlightLink(element) {
	element.style.color=onColor;
	element.style.fontWeight="bold";
	element.style.textDecoration="underline";
}

function unHighlightLink(element) {
	element.style.color=outColor;
	element.style.fontWeight="normal";
	element.style.textDecoration="none";
}

function adjustSite() {
	if (document.getElementById('leftnavContainer').clientHeight > document.getElementById('contentContainer').clientHeight) {
		document.getElementById('contentContainer').style.height=document.getElementById('leftnavContainer').clientHeight+'px';	
		document.getElementById('banner').style.backgroundImage="url('1.jpg')";
		setInterval('banner()', 3000);
	} else {
		document.getElementById('leftnavContainer').style.height=document.getElementById('contentContainer').clientHeight+'px';	
		document.getElementById('banner').style.backgroundImage="url('1.jpg')";
		setInterval('banner()', 3000);
	}
}

function banner() {
	var bannerDiv = $('banner');
	var myFx = new Fx.Tween(bannerDiv);
	myFx.start('opacity', '1.0', '0.0').set('tween', {duration: 'long'});	
	setTimeout('swapPicInBanner()', 700);	
}

function swapPicInBanner() {
	var bannerDiv = $('banner');
	if (bannerSwitch > 2) {
		bannerSwitch = 0;
	}	
	bannerDiv.style.backgroundImage = bannerBg[bannerSwitch];	
	bannerSwitch = bannerSwitch + 1;	
	var myFx = new Fx.Tween(bannerDiv);
	myFx.start('opacity', '0.0', '1.0').set('tween', {duration: 'fast'});
}