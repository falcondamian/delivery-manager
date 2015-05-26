Template.pedido.helpers({  

  attributes: function() {
    
    var attributes = {};
    
    if (this.entregado) {

      attributes.class = 'pedido done';

    } else {    

      attributes.class = "pedido pending"
    }

    return attributes;
  }
});

Template.pedido.events({

  'change [type=checkbox]': function(event) {

    var checked = $(event.target).is(':checked');  

    Meteor.call('check_pedido', this._id, checked, function(error) {            
        if (error) {                
          return throwError(error.reason);
        }
    });
  }

});