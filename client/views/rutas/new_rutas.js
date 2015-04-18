Template.new_rutas.helpers ({

    // controllers
    //rutas: function() {
        //
    //}

});

Template.new_rutas.events ({
    // event handlers
    'click #save': function(evt, tpl) {
        evt.preventDefault();

        var new_rutas = {
            nombre: tpl.find('#input_nombre').value
        };

        var errors = validateRutas(new_rutas);
        if (errors.nombre)
          return Session.set('rutasSubmitErrors', errors);

        // the method returns the new object id after saving it into the db
        Meteor.call('insert_rutas', new_rutas);
        Router.go('rutas');

    }

});

