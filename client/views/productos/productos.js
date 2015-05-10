Template.productos.helpers ({

    productos: function() {
        return productos.find().fetch();
    }

});

Template.productos.events ({
    
    'click #deleteModal': function(evt, tpl) {

        Session.set('productoSeleccionado', this);
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

Template.productosModal.data = function() { 

  return Session.get('productoSeleccionado');
}

Template.productosModal.events ({
  
    'click #delete': function(evt, tpl) {

        Meteor.call('delete_productos', this._id);
    }

});

