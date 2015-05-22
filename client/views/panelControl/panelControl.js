Template.panelControl.helpers({

    repartos: function() {
        
        return repartos.find({},{sort: {fecha: -1}}).fetch();
    },

	pedidosRepartidores: function() {

    	return pedidos.find().fetch();
  	}

});

Template.panelControl.events ({    
    
    'keyup #filter_field': function (evt, tpl) {
        $(".pedido").filter(function () {
            var word = tpl.find('#filter_field').value;
            if (word !== '') {                
                $('.pedido').hide();
                $('.pedido').filter(function () {
                    return $(this).text().toLowerCase().indexOf(word.toLowerCase()) > -1
                }).show();
            }
            else {
                $('.pedido').show();
            }
            return false;
        })
    }
});