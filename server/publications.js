Meteor.publish('rutas', function() {
    return rutas.find();
});

Meteor.publish('productos', function() {
    return productos.find();
});

Meteor.publish('cliente', function(id) {  
  	return clientes.find({_id: id});
});

Meteor.publish('clientes', function(id) {  
  	return clientes.find();
});

Meteor.publish('clientesOfRuta', function(rutaId) {  
  	return clientes.find({rutaId: rutaId});
});

Meteor.publish('repartos', function() {
    return repartos.find();
});

Meteor.publish('repartosFecha', function(fechaFiltro) {
    return repartos.find({fecha : fechaFiltro});
});

Meteor.publish('pedido', function(id) {  
  	return pedidos.find({_id: id});
});

Meteor.publish('pedidosOfReparto', function(repartoId) {
    return pedidos.find({repartoId: repartoId});
});

Meteor.publish('pedidosOfRepartos', function(repartosIds) {
    return pedidos.find({repartoId: {$in : repartosIds}});
});

