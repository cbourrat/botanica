var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var plante = new Schema({
	nomSimple: String,
	nomLatin: String,
	famille: String,
	espece: String,
	dateAjout: Date,
	tige: [{
		croissance: String,
		ramification: String,
		couleur: String,
		forme: String,
		texture: String
	}],
	feuille: [{
		isInfSupIdentique: Boolean,
		forme: [{
			foliaire: String,
			silhouette: String
		}],
		attache: String,
		disposition: String,
		taille: Number,
		couleur: String,
		typeFeuillage: String,
		texture: String
	}],
	fleur: [{
		couleur: String,
		corolle: String,
		inflorescence: String,
		formePetale: String,
	}],
	fruit: [{
		couleur: String,
		forme: String,
		taille: Number,
		texture: String
	}]
});

module.exports = mongoose.model('plante', planteModel);