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