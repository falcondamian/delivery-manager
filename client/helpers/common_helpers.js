UI.registerHelper('selected', function(key, value) {

    return key == value? { selected: 'selected' } : '';
});

UI.registerHelper('indexedArray', function(context, options) {	
	if (context) {
		return context.map(function(item, index) {
			item.index = index + 1;
			return item;
		});
	}
}); 

UI.registerHelper('objetoRuta', function(idRuta) {

    var ruta = rutas.findOne(idRuta);
    return ruta.nombre;
});

UI.registerHelper('objetoCliente', function(idCliente) {

    var cliente = clientes.findOne(idCliente);
    return cliente.nombre;
});

UI.registerHelper('objetoProducto', function(idProducto) {

    var producto = productos.findOne(idProducto);
    return producto.nombre;
});

UI.registerHelper('objetoUsuario', function(idUsuario) {

    var usuario = Meteor.users.findOne(idUsuario);
    return usuario.username;
});

UI.registerHelper('isAdminUser', function() {

    return Roles.userIsInRole(Meteor.user(), ['admin']);
});

//Formatea una fecha javascript a dd//mm//yyyy
UI.registerHelper('formateaFecha', function(fecha) {
    
    return moment(fecha).format('DD/MM/YYYY');
});

//Formatea una fecha javascript a HH:mm
UI.registerHelper('formateaHoras', function(fecha) {
    
    return moment(fecha).format('HH:mm');
});