Template.clientes.helpers ({    

    clientes: function() {
        return clientes.find().fetch();
    }

});

Template.clientes.events ({

    'click #delete': function(evt, tpl) {
        Meteor.call('delete_clientes', this._id);
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

