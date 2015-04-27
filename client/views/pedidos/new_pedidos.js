Template.new_pedidos.helpers ({

    // controllers
    //pedidos: function() {
        //
    //}

});

Template.new_pedidos.events ({
    // event handlers
    'click #save': function(evt, tpl) {
        evt.preventDefault();

        var new_pedido = {
            hora: tpl.find('#input_hora').value,
            clienteId: tpl.find('#input_cliente').value,            
            entregado: false,
            productos : Session.get('productosAnadidos'),
            repartoId: this.reparto._id
        };

        var errors = validatePedido(new_pedido);
        console.log(errors);
        if (errors.hora || errors.clienteId || errors.repartoId)
          return Session.set('pedidosSubmitErrors', errors);

        // the method returns the new object id after saving it into the db
        Meteor.call('insert_pedidos', new_pedido);
        Router.go('/repartos/' + this.reparto._id + '/pedidos');
    }

});

