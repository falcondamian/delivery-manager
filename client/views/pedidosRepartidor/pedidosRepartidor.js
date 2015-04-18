Template.pedidosRepartidor.helpers({

	pedidosRepartidor: function() {

    	return pedidos.find().fetch();
  	}

});