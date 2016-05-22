var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tige = new Schema({
	// Tige dressée ; Tige rampante
	croissance: String,
	// Peu ; très
	ramification: String,
	// TODO
	couleur: String,
	// Carrée ; Carrée concave ; Trigone congave ;
	// Trigone convexe ; Cylindrique ; Aplatie ou
	// Elliptique ; Renflée ; Noueuse ; Ailée ; Striée ; 
	// Sillonée ; Cannelée ; Côtelée
	forme: String,
	// Glabre ou lisse ; Pubescente ; Velue ou Poilue ;
	// Laineuse ou Cotonneuse ; Epineuse ; Verruqueuse ;
	// Glanduleuse ; Subéruse à crêtes liégeuse
	texture: String
});

module.exports = mongoose.model('tige', tigeModel);