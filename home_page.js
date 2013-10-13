// JavaScript Document

function font_picture(){
	var link_picture = ['bathroom_1', 'bois_1', 'bois_2', 'bois_3', 'home_1', 'salon_1', 'salon_2', 'street_1'];
	var random_picture = Math.floor(Math.random()*8);
	document.getElementById('picture_font').src = 'pictures/'+link_picture[+random_picture]+'.jpg';
}

function citation(){
	var citation = [
	"« Ma vie est mon seul enseignement.  » </br><i>- Gandhi",
	"« Il vaut mieux mettre son coeur dans la prière sans</br> trouver de paroles que trouver des mots sans y mettre son coeur.  »</br><i>- Gandhi",
	"« La vie est un mystère qu'il faut vivre, et non un problème à résoudre.  »</br><i>- Gandhi",
	"« L'hésitation est le propre de l'intelligence.  »</br><i>- Henry de Montherlant",
	"« La joie n'est pas dans les choses, elle est en nous.  »</br><i>- Richard Wagner",
	"« Les fautes sont grandes quand l'amour est petit.  »</br><i>- Proverbe italien"
	];
	var random_citation = Math.floor(Math.random()*6);
	
	document.getElementById("citation").firstChild.innerHTML = citation[random_citation]+"</i>";
}