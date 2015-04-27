pedidos = new Mongo.Collection('pedidos');

validatePedido = function (pedido) {
  var errors = {};

  if (!pedido.hora)
    errors.hora = "La hora del pedido es requerida";

  if (!pedido.clienteId)
  	errors.clienteId = "El cliente del pedido es requerido.";

  if (!pedido.repartoId)
  	errors.repartoId = "Un pedido debe pertenecer a algún reparto";

  return errors;
}

validateProductoPedido = function (productoPedido) {
  var errors = {};

  if (!productoPedido.producto)
    errors.producto = "Debe seleccionar un producto";

  if (!productoPedido.cantidad)
    errors.cantidad = "Debe indicar una cantidad";

  return errors;
}
