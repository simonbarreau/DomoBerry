// JavaScript Document

function font_picture(){
	var link_picture = ['bathroom_1', 'bois_1', 'bois_2', 'bois_3', 'home_1', 'salon_1', 'salon_2', 'street_1'];
	var random_picture = Math.floor(Math.random()*8);
	document.getElementById('picture_font').src = 'pictures/'+link_picture[+random_picture]+'.jpg';
}

function citation(){
	var liste_citation = ["« Ma vie est mon seul enseignement.  » de Gandhi</br>"];
}