Template.edit_reparto.helpers ({

    // controllers
    //reparto: function() {
        //
    //}

});

Template.edit_reparto.events ({
    // event handlers
    'click #save': function(evt, tpl) {
        evt.preventDefault();

        var updated_reparto = {
            rutaId: tpl.find('#input_ruta').value,
            fecha: tpl.find('#input_fecha').value ? moment(tpl.find('#input_fecha').value, 'DD/MM/YYYY').toDate() : '',     
            repartidorId: tpl.find('#input_repartidor').value           
        };

        var errors = validateReparto(updated_reparto);
        if (errors.fecha || errors.rutaId || errors.repartidorId)
          return Session.set('repartosSubmitErrors', errors);

        // the method returns the new object id after saving it into the db
        Meteor.call('update_reparto', this._id, updated_reparto);
        Router.go('repartos');

    }

});

