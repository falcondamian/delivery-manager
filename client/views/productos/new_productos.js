Template.new_productos.helpers ({

    // controllers
    //productos: function() {
        //
    //}

});

Template.new_productos.events ({
    // event handlers
    'click #save': function(evt, tpl) {
        evt.preventDefault();        

        var new_producto = {
            nombre: tpl.find('#input_nombre').value,
            descripcion: tpl.find('#input_descripcion').value,
        };

        var errors = validateProducto(new_producto);
        if (errors.nombre || errors.descripcion)
          return Session.set('productosSubmitErrors', errors);

        // the method returns the new object id after saving it into the db
        Meteor.call('insert_productos', new_producto);
        Router.go('productos');
    }

});

