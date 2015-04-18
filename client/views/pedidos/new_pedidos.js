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

        var new_pedidos = {
            hora: tpl.find('#input_hora').value,
            clienteId: tpl.find('#input_cliente').value,            
            entregado: false,
            productos : Session.get('productosAnadidos'),
            repartoId: this.reparto._id
        };

        // the method returns the new object id after saving it into the db
        Meteor.call('insert_pedidos', new_pedidos);
        Router.go('/repartos/' + this.reparto._id + '/pedidos');
    }

});

