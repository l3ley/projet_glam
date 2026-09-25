// ouvre un pop-up pour remercier l'utilisateur
// taille fixe, page en haut à gauche
function ouvrirMerci() {
let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
width=600,height=300,left=100,top=100`;

open('merci.html', 'merci', params);
}

// ouvre un pop-up confirmant l'inscription à un cours
// taille fixe, page en haut à gauche
function ouvrirOkCours() {
let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
width=600,height=300,left=100,top=100`;

open('OkCours.html', 'merci', params);
}
