repartos = new Mongo.Collection('repartos');

validateReparto = function (reparto) {
  var errors = {};

  if (!reparto.fecha)
    errors.fecha = "La fecha del reparto es requerida";
  
  if (!reparto.rutaId)
    errors.rutaId =  "La ruta del reparto es requerida";

  if (!reparto.repartidorId)
    errors.repartidorId =  "El repartidor del reparto es requerido";

  return errors;
}
