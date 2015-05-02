Template.pedidos.helpers ({

    pedidos: function() {
        return pedidos.find().fetch();
    }

});

Template.pedidos.events ({

    // event handlers
    // delete the selected object
    'click #delete': function(evt, tpl) {
        Meteor.call('delete_pedidos', this._id);
    },

    // filter function
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

    'click #checkAll': function (evt, tpl) {
        $('.checkthis').prop('checked', evt.target.checked);
    },

    'click #deleteAll': function () {
        // get the id of the checked rows
        $('input:checkbox:checked').filter(function(){
            var selectedIds = $(this).closest('tr').attr('id');
            if (selectedIds !== undefined) {
                Meteor.call('delete_selected_pedidos', selectedIds);
            }
        });
    },

    'click #copyPreviousDay': function () {
        
        var yesterday = new Date();
        yesterday.setHours(0,0,0,0);
        yesterday.setDate(yesterday.getDate() - 1);  

        Meteor.call('copy_pedidos', this, yesterday, function(error, result) {
          if (error)
            return throwError(error.reason);  
        });
    }    

});

