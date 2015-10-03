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
            alert(ev.date);
            console.log('Cambiar subscripcion con esta fecha nueva');  
    });
}