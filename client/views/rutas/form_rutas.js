Template.form_rutas.created = function() {

  Session.set('rutasSubmitErrors', {});
}

Template.form_rutas.helpers({

  errorMessage: function(field) {
    return Session.get('rutasSubmitErrors')[field];
  },

  errorClass: function (field) {
    return !!Session.get('rutasSubmitErrors')[field] ? 'has-error' : '';
  }

});