Template.edit_productos.helpers ({

    // controllers
    //productos: function() {
        //
    //}

});

Template.edit_productos.events ({
    // event handlers
    'click #save': function(evt, tpl) {
        evt.preventDefault();

        var updated_producto = {
            nombre: tpl.find('#input_nombre').value,
            descripcion: tpl.find('#input_descripcion').value,
        };

        var errors = validateProducto(updated_producto);
        if (errors.nombre || errors.descripcion)
          return Session.set('productosSubmitErrors', errors);

        // the method returns the new object id after saving it into the db
        Meteor.call('update_productos', this._id, updated_producto);
        Router.go('productos');

    }

});

