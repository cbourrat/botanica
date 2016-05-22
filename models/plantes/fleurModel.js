var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var fleur = new Schema({
	// Jaune ; Blanc ; Rose ou Rouge ; Violette ou Mauve ;
	// Bleue ; Vert ou Brune ou Peu apparente
	couleur: String,
	// Cornet ou tube ; Clochette ; Entonnoir ; Rayonnée ;
	// Bilatérale
	corolle: String,
	// Défini ; Indéfini
	inflorescence: String,
	// Arrondie ; Ovale ; En coeur ou bilobée ; Dentée ; 
	// Terminée en pointe fine ; Nervurée
	formePetale: String

});

module.exports = mongoose.model('fleur', fleurModel);