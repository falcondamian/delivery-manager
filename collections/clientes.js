clientes = new Mongo.Collection('clientes');

validateCliente = function (cliente) {
  var errors = {};

  if (!cliente.nombre)
    errors.nombre = "El nombre del cliente es requerido";
  
  if (!cliente.direccion)
    errors.direccion =  "La dirección del cliente es requerida";

  return errors;
}