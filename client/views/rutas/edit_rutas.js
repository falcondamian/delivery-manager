Template.edit_rutas.helpers ({

    // controllers
    //rutas: function() {
        //
    //}

});

Template.edit_rutas.events ({
    // event handlers
    'click #save': function(evt, tpl) {
        evt.preventDefault();

        var updated_rutas = {
            nombre: tpl.find('#input_nombre').value            
        };

        var errors = validateRutas(updated_rutas);
        if (errors.nombre)
          return Session.set('rutasSubmitErrors', errors);

        // the method returns the new object id after saving it into the db
        Meteor.call('update_rutas', this._id, updated_rutas);
        Router.go('rutas');

    }

});

