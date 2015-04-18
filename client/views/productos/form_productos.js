Template.form_productos.created = function() {

  Session.set('productosSubmitErrors', {});
}

Template.form_productos.helpers({

  errorMessage: function(field) {
    return Session.get('productosSubmitErrors')[field];
  },

  errorClass: function (field) {
    return !!Session.get('productosSubmitErrors')[field] ? 'has-error' : '';
  }

});