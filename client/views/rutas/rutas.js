Template.rutas.helpers ({

    rutas: function() {
        return rutas.find().fetch();
    }

});

Template.rutas.events ({

    'click #deleteModal': function(evt, tpl) {
        
        Session.set('rutaSeleccionada', this);
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
    }

});

Template.rutasModal.data = function() { 

  return Session.get('rutaSeleccionada');
}

Template.rutasModal.events ({
  
    'click #delete': function(evt, tpl) {

        Meteor.call('delete_rutas', this._id);
    }

});

