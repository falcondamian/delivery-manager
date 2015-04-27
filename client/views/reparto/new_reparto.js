Template.new_reparto.helpers ({

});

Template.new_reparto.events ({
    // event handlers
    'click #save': function(evt, tpl) {
        evt.preventDefault();

        var new_reparto = {
            rutaId: tpl.find('#input_ruta').value,
            fecha: tpl.find('#input_fecha').value ? moment(tpl.find('#input_fecha').value, 'DD/MM/YYYY').toDate() : '',
            repartidorId: tpl.find('#input_repartidor').value            
        };

        var errors = validateReparto(new_reparto);
        if (errors.fecha || errors.rutaId || errors.repartidorId)
          return Session.set('pedidosSubmitErrors', errors);
        
        Meteor.call('insert_reparto', new_reparto);
        Router.go('repartos');
    }

});

