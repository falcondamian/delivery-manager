var repFechSubs;

Template.panelControl.onCreated(function () {

    var today = new Date();
    today.setHours(0,0,0,0);

    repFechSubs = Meteor.subscribe('repartosFecha', today);

    Tracker.autorun(function () {
        if (repFechSubs.ready()) {
            var repartosAux = repartos.find().fetch();     
            
            console.log('Repartos cargados ' + repartosAux.length);

            var idsRepartos = repartosAux.map(function(p) { return p._id });        
            if (repartosAux && repartosAux.length > 0) {
                Meteor.subscribe('pedidosOfRepartos', idsRepartos);
            }
        }
    });    

    Meteor.subscribe('clientes')
});

Template.panelControl.helpers({

    repartos: function() {
        
        return repartos.find({},{sort: {fecha: -1}}).fetch();
    },

	pedidosReparto: function(repartoId) {

    	return pedidos.find({repartoId: repartoId}).fetch();
  	},

    fechaHoy: function() {
        var today = new Date();
        today.setHours(0,0,0,0);

        return today;
    }

});

Template.panelControl.events ({    
    
    'keyup #filter_field': function (evt, tpl) {
        $(".pedido").filter(function () {
            var word = tpl.find('#filter_field').value;
            if (word !== '') {                
                $('.pedido').hide();
                $('.pedido').filter(function () {
                    return $(this).text().toLowerCase().indexOf(word.toLowerCase()) > -1
                }).show();
            }
            else {
                $('.pedido').show();
            }
            return false;
        })
    }
});

Template.panelControl.rendered = function() {

    $('#datetimepicker').datetimepicker({format:'DD/MM/YYYY'})
        .on('dp.change', function (ev) {
            if(repFechSubs) {
               repFechSubs.stop(); 
               console.log('Stop subscripcion');
            }
            repFechSubs = Meteor.subscribe('repartosFecha', ev.date.toDate()); 
    });
}