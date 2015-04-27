Template.form_reparto.created = function() {

  Session.set('repartosSubmitErrors', {});
}

Template.form_reparto.helpers ({

    rutas: function() {
        return rutas.find().fetch();
    },

    usuarios: function() {
        return Meteor.users.find().fetch();
    },

    errorMessage: function(field) {
    	return Session.get('repartosSubmitErrors')[field];
  	},

  	errorClass: function (field) {
    	return !!Session.get('repartosSubmitErrors')[field] ? 'has-error' : '';
  	}

});

Template.form_reparto.rendered = function() {

    $('#datetimepicker').datetimepicker({format:'DD/MM/YYYY'});
}

