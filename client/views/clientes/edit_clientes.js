Template.edit_clientes.helpers ({

    // controllers
    //clientes: function() {
        //
    //}

});

Template.edit_clientes.events ({
    // event handlers
    'click #save': function(evt, tpl) {
        evt.preventDefault();

        var updated_clientes = {
            nombre: tpl.find('#input_nombre').value,
            direccion: tpl.find('#input_direccion').value,
            telefono: tpl.find('#input_telefono').value,
        };

        var errors = validateCliente(updated_clientes);
        if (errors.nombre || errors.direccion)
          return Session.set('clientesSubmitErrors', errors);

        // the method returns the new object id after saving it into the db
        Meteor.call('update_clientes', this._id, updated_clientes);
        Router.go('/rutas/' + this.rutaId + '/clientes');

    }

});

