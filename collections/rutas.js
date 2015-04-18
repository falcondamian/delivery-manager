rutas = new Mongo.Collection('rutas');

validateRutas = function (ruta) {
  var errors = {};

  if (!ruta.nombre)
    errors.nombre = "El nombre de la ruta es requerido";

  return errors;
}
