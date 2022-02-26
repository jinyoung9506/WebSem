function initMap() {
    var stecloc = new google.maps.LatLng(37.631659, 127.077490);
    var stech = new google.maps.Map(document.getElementById('maps'),{ zoom : 15, center : stecloc});
    var marker = new google.maps.Marker({position:stecloc,map:stech});
}

function startup() {
    $('#mid').css('width','100%');
	$('#mid').css('height','0%');
	$('#mid').css('top','50%');
	$('header').css('height','50%');
	$('footer').css('height','50%');
	$('#foot').css('opacity','0%');
	$('.btn').css('opacity','0%');
	$('#logo').css('opacity','0%');
	$('#title').css('opacity','0%');
	setInterval(() => {
		$('#mid').css('-webkit-animation-name','mv');
		$('header').css('-webkit-animation-name','stt');
		$('footer').css('-webkit-animation-name','stt');
		$('#foot').css('-webkit-animation-name','appear');
		$('#mid').css('width','12%');
		$('#mid').css('height','80%');
		$('#mid').css('top','10%');
		$('header').css('height','10%');
		$('footer').css('height','10%');
		$('#foot').css('opacity','100%');
	}, 1000);
	setInterval(() => {
		$('.btn').css('-webkit-animation-name','appear');
		$('#logo').css('-webkit-animation-name','appear');
		$('#title').css('-webkit-animation-name','appear');
		$('#title').css('opacity','100%');
		$('.btn').css('opacity','100%');
		$('#logo').css('opacity','100%');
	}, 2500);
}

function btn1() {
	$('#bodys').load('index.html #bodys');
	$('#b1').empty();
}
function btn2() {
	$('#bodys').load('histories.html #bodys');
	$('#bodys').css('opacity','0%');
	setTimeout(() => {
	}, 5);
	$('#bodys').css('-webkit-animation-name','appear');
	$('#bodys').css('opacity','100%');
	$('#b1').html("처음으로");
}
function btn3() {
	$('#bodys').load('location.html #bodys');
	$('#bodys').css('opacity','0%');
	setTimeout(() => {
		initMap();
	}, 50);
	$('#bodys').css('-webkit-animation-name','appear');
	$('#bodys').css('opacity','100%');
	$('#b1').html("처음으로");
	
}
function btn4() {
	$('#bodys').load('prosNcons.html #bodys');
	$('#bodys').css('opacity','0%');
	setTimeout(() => {
	}, 5);
	$('#bodys').css('-webkit-animation-name','appear');
	$('#bodys').css('opacity','100%');
	$('#Nb1').css('opacity','100%');
	$('#Nb2').css('opacity','100%');
	$('#b1').html("처음으로");
}
function btn5() {
	$('#bodys').load('req.html #bodys');
	$('#bodys').css('opacity','0%');
	setTimeout(() => {
	}, 5);
	$('#bodys').css('-webkit-animation-name','appear');
	$('#bodys').css('opacity','100%');
	$('#b1').html("처음으로");
}

function hbtn1() {
	$('#tbl').load('histories.html #a2010a');
	$('#tbl').css('opacity','0%');
	setTimeout(() => {
	}, 5);
	$('#tbl').css('-webkit-animation-name','appear');
	$('#tbl').css('opacity','100%');
}
function hbtn2() {
	$('#tbl').load('histories.html #s2000s');
	$('#tbl').css('opacity','0%');
	setTimeout(() => {
	}, 5);
	$('#tbl').css('-webkit-animation-name','appear');
	$('#tbl').css('opacity','100%');
}
function hbtn3() {
	$('#tbl').load('histories.html #s1990s');
	$('#tbl').css('opacity','0%');
	setTimeout(() => {
	}, 5);
	$('#tbl').css('-webkit-animation-name','appear');
	$('#tbl').css('opacity','100%');
}
function hbtn4() {
	$('#tbl').load('histories.html #s1980s');
	$('#tbl').css('opacity','0%');
	setTimeout(() => {
	}, 5);
	$('#tbl').css('-webkit-animation-name','appear');
	$('#tbl').css('opacity','100%');
}
function hbtn5() {
	$('#tbl').load('histories.html #s1970s');
	$('#tbl').css('opacity','0%');
	setTimeout(() => {
	}, 5);
	$('#tbl').css('-webkit-animation-name','appear');
	$('#tbl').css('opacity','100%');
}

function Ntn1() {
	$('#Nb1').css('-webkit-animation-name','disappear');
	$('#Nb1').css('opacity','0%');
	$('#NS1').load('prosNcons.html #N1');
}
function Ntn2() {
	$('#Nb2').css('-webkit-animation-name','disappear');
	$('#Nb2').css('opacity','0%');
	$('#NS2').load('prosNcons.html #N2');
}