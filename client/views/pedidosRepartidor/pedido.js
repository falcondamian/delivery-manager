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

    pedidos.update(this._id, {$set: {entregado: checked}});
  }

});