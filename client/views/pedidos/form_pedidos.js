Template.form_pedidos.created = function() {

    if (this.data.productos) {
        
        Session.set('productosAnadidos', this.data.productos);

    } else {

        Session.set('productosAnadidos', []);
    }
}

Template.form_pedidos.helpers ({

    clientes: function() {
        return clientes.find().fetch();
    },
    
    productosDisponibles: function() {
        return productos.find().fetch();
    },

    productosAnadidos : function() {
        return Session.get('productosAnadidos');
    }

});


Template.form_pedidos.events ({
   
	'click #anadirProducto': function(evt, tpl) {
        evt.preventDefault();

        var newPedido = {
            producto: tpl.find('#input_producto').value,
            cantidad: tpl.find('#input_cantidad').value,
            observaciones: tpl.find('#input_observaciones').value
        };

        var productosAnadidos = Session.get('productosAnadidos').slice();
        productosAnadidos.push(newPedido);
        Session.set('productosAnadidos', productosAnadidos);
    },

    'click #deleteProducto': function(evt, tpl) {
        evt.preventDefault();

        var productosAnadidos = Session.get('productosAnadidos').slice();
        productosAnadidos.splice(this.index - 1, 1); 
        Session.set('productosAnadidos', productosAnadidos);
    }

});

Template.form_pedidos.rendered = function() {
    
    $('#datetimepicker').datetimepicker({format:'HH:mm'});
}

