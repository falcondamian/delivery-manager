Template.form_clientes.created = function() {

  Session.set('clientesSubmitErrors', {});
}

Template.form_clientes.helpers({

  errorMessage: function(field) {
    return Session.get('clientesSubmitErrors')[field];
  },

  errorClass: function (field) {
    return !!Session.get('clientesSubmitErrors')[field] ? 'has-error' : '';
  }

});