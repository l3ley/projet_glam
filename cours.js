
// gère l'affichage avec les différents onglets pour les cours
function changeTab(evt, target) {
	console.log("Affichage de l'onglet : " + target); 
	var tabcontent, tablinks;
	// cache tout les elements
	tabcontent = document.getElementsByClassName("tabcontent");
	for (let i = 0; i < tabcontent.length; i++) {
	  tabcontent[i].style.display = "none";
	}

	//supprime la classe "active" de tout les boutons
	tablinks = document.getElementsByClassName("tablinks");
	for (let i = 0; i < tablinks.length; i++) {
	  tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	//affiche l'onglet et ajoute la classe "active"
	document.getElementById(target).style.display = "block";
	evt.currentTarget.className += " active";
}

function naviguer(destination) {
	window.location.href = destination;
}


