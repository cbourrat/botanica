var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var feuille = new Schema({
	isInfSupIdent: Boolean,
	forme: [{
		// Composée ; Simple
		foliaire: String,
		// Voir détail fichier
		silhouette: String
	}],
	// Sessiles ; Pétiolées
	attache: String,
	// Alterne ; Opposées
	disposition: String,
	// TODO
	taille: Number,
	// TODO
	couleur: String,
	// Persistent ; Caduc
	typeFeuillage: String,
	// Luisant ou Brillant ; Lisse ; Grasse ; Velue
	texture: String
});

module.exports = mongoose.model('feuille', feuilleModel);