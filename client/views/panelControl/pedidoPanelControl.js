Template.pedidoPanelControl.helpers({  

  	attributes: function() {
    
	    var attributes = {};
	    
	    if (this.entregado) {

	      attributes.class = 'pedido done';

	    } else {    

	      attributes.class = "pedido pending"
	    }

    	return attributes;
  	}
});

Template.pedidoPanelControl.events ({    
    
    'click #verPedidos': function (evt, tpl) {
    	var idPedido = '#' + this._id;    	
        $(idPedido).fadeToggle();
    }
});