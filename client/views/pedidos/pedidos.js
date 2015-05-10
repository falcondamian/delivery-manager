Template.pedidos.helpers ({

    pedidos: function() {
        return pedidos.find().fetch();
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

    'click #selectDate': function(evt, tpl) {
        
        Session.set('fechaSeleccionada', null);
    }    

});

