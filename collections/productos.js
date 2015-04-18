productos = new Mongo.Collection('productos');

validateProducto = function (producto) {
  var errors = {};

  if (!producto.nombre)
    errors.nombre = "El nombre del producto es requerido";
  
  if (!producto.descripcion)
    errors.descripcion =  "La descripción del producto es requerida";

  return errors;
}
