Template.new_clientes.helpers ({

    // controllers
    //clientes: function() {
        //
    //}

});

Template.new_clientes.events ({
    // event handlers
    'click #save': function(evt, tpl) {
        evt.preventDefault();

        var new_clientes = {
            nombre: tpl.find('#input_nombre').value,
            direccion: tpl.find('#input_direccion').value,
            telefono: tpl.find('#input_telefono').value,
            rutaId : this.ruta._id
        };

        // the method returns the new object id after saving it into the db
        Meteor.call('insert_clientes', new_clientes);
        Router.go('/rutas/' + this.ruta._id + '/clientes');

    }

});

