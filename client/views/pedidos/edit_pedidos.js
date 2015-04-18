Template.edit_pedidos.helpers ({

    // controllers
    //pedidos: function() {
        //
    //}

});

Template.edit_pedidos.events ({
    // event handlers
    'click #save': function(evt, tpl) {
        evt.preventDefault();

        var updated_pedidos = {
            hora: tpl.find('#input_hora').value,
            clienteId: tpl.find('#input_cliente').value,            
            entregado: false,
            productos : Session.get('productosAnadidos'),
            repartoId: this.repartoId
        };

        // the method returns the new object id after saving it into the db
        Meteor.call('update_pedidos', this._id, updated_pedidos);
        Router.go('/repartos/' + this.repartoId + '/pedidos');
    }

});

