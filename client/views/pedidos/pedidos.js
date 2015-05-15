Template.pedidos.helpers ({

    pedidos: function() {
        return pedidos.find({},{sort: {hora: 1}}).fetch();
    }

});

Template.pedidos.events ({
    
    'click #delete': function(evt, tpl) {
        Meteor.call('delete_pedidos', this._id);
    },
    
    'keyup #filter_field': function (evt, tpl) {
        $("td").filter(function () {
            var word = tpl.find('#filter_field').value;
            if (word !== '') {
                $('.table-responsive tbody>tr').hide();
                $('.table-responsive td').filter(function () {
                    return $(this).text().toLowerCase().indexOf(word.toLowerCase()) > -1
                }).parent('tr').show();
            }
            else {
                $('.table-responsive tbody>tr').show();
            }
            return false;
        })
    },    

    'click #copyPreviousDay': function () {
        
        var yesterday = new Date();
        yesterday.setHours(0,0,0,0);
        yesterday.setDate(yesterday.getDate() - 1);  

        Meteor.call('copy_pedidos', this, yesterday, function(error, result) {
          if (error)
            return throwError(error.reason);  
        });
    },

    'click #selectDate' : function (evt, tpl) {

        tpl.find('#input_fecha').value  = '';
    }   

});

Template.pedidosModal.created = function() {

  Session.set('modalSelectDateSubmitErrors', {});
}

Template.pedidosModal.rendered = function() {

    $('#datetimepicker').datetimepicker({format:'DD/MM/YYYY'});
}

Template.pedidosModal.helpers ({

    errorMessage: function(field) {
        return Session.get('modalSelectDateSubmitErrors')[field];
    },

    errorClass: function (field) {
        return !!Session.get('modalSelectDateSubmitErrors')[field] ? 'has-error' : '';
    }

});

Template.pedidosModal.events ({
  
    'click #copiar': function(evt, tpl) {

        var fecha = tpl.find('#input_fecha').value ? moment(tpl.find('#input_fecha').value, 'DD/MM/YYYY').toDate() : '';
       
        if (!fecha || fecha == '') {
          var errors = {};
          errors.fecha = "Debe indicar una fecha";
          return Session.set('modalSelectDateSubmitErrors', errors);
        }

        Meteor.call('copy_pedidos', this, fecha, function(error, result) {
          if (error)
            return throwError(error.reason);  
        });
    }

});



    

