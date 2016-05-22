var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var fruit = new Schema({
	// TODO
	couleur: String,
	// Rond ; Ovale ; Grappe
	forme: String,
	// TODO
	taille: Number,
	// Velu ; Lisse ; Luisant
	texture: String
});

module.exports = mongoose.model('fruit', fruitModel);