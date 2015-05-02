Template.pedidosRepartidor.helpers({

	pedidosRepartidor: function() {

    	return pedidos.find().fetch();
  	}

});

Template.pedidosRepartidor.events ({    

    // filter function
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

Template.pedidosRepartidor.rendered = function() {

    $('#datetimepicker').datetimepicker({format:'DD/MM/YYYY'});
}