Meteor.methods({
 
    delete_selected_pedidos: function(selectedIds) { 
        check(Meteor.userId(), String);
        pedidos.remove(selectedIds); 
    }, 
 
    update_pedidos: function(id, object_pedidos) { 
        check(Meteor.userId(), String);
        pedidos.update({_id: id}, {$set: object_pedidos }); 
    }, 
 
    delete_pedidos: function(pedidosId) {
        check(Meteor.userId(), String); 
        pedidos.remove(pedidosId); 
    }, 
 
    insert_pedidos: function(object_pedidos) {
        check(Meteor.userId(), String); 
        var pedidosId = pedidos.insert(object_pedidos); 
        return pedidosId; 
    },

    copy_pedidos: function(reparto, fechaOrigen) {
        check(Meteor.userId(), String); 

        //Localizamos el reparto anterior
        var repartoRutaRepartidorFecha = repartos.find({rutaId : reparto.rutaId, repartidorId : reparto.repartidorId, fecha : fechaOrigen}).fetch();
        
        if (repartoRutaRepartidorFecha && repartoRutaRepartidorFecha[0]) {
            //Cogemos sus pedidos
            var pedidosOfReparto = pedidos.find({repartoId: repartoRutaRepartidorFecha[0]._id}).fetch();
            
            //Si tiene pedidos
            if (pedidosOfReparto) {
            
                for (var index in pedidosOfReparto) {

                    delete pedidosOfReparto[index]._id;
                    pedidosOfReparto[index].repartoId = reparto._id;

                    Meteor.call('insert_pedidos', pedidosOfReparto[index]);
                }  
            } else {

                throw new Meteor.Error('noExistenPedidosAnterior', "No existen pedidos del día anterior para este repartidor y ruta");
            }          
        }  else {

            throw new Meteor.Error('noExisteRepartoAnterior', "No existe un reparto del día anterior para este repartidor y ruta");
        }      
    }, 
 
    delete_selected_reparto: function(selectedIds) {
        check(Meteor.userId(), String); 
        repartos.remove(selectedIds); 
    }, 
 
    update_reparto: function(id, object_reparto) {
        check(Meteor.userId(), String); 
        repartos.update({_id: id}, {$set: object_reparto }); 
    }, 
 
    delete_reparto: function(repartoId) {
        check(Meteor.userId(), String); 
        repartos.remove(repartoId); 
    }, 
 
    insert_reparto: function(object_reparto) {         
        check(Meteor.userId(), String);

        //Validamos si existe un reparto ya creado para ese dia, repartidor y ruta
        var repartoExistente = repartos.find({rutaId : object_reparto.rutaId, repartidorId : object_reparto.repartidorId, fecha : object_reparto.fecha}).fetch();

        if(repartoExistente && repartoExistente[0]) {

            throw new Meteor.Error('existenRepartoMismosDatos', "Ya existe un reparto para este repartidor en la misma ruta y fecha");

        } else {

             var repartoId = repartos.insert(object_reparto); 
            return repartoId;
        }        
    }, 
 
    delete_selected_clientes: function(selectedIds) { 
        check(Meteor.userId(), String);
        clientes.remove(selectedIds); 
    }, 
 
    update_clientes: function(id, object_clientes) { 
        check(Meteor.userId(), String);
        clientes.update({_id: id}, {$set: object_clientes }); 
    }, 
 
    delete_clientes: function(clientesId) { 
        check(Meteor.userId(), String);
        clientes.remove(clientesId); 
    }, 
 
    insert_clientes: function(object_clientes) { 
        check(Meteor.userId(), String);
        var clientesId = clientes.insert(object_clientes); 
        return clientesId; 
    }, 
 
    delete_selected_productos: function(selectedIds) { 
        check(Meteor.userId(), String);
        productos.remove(selectedIds); 
    }, 
 
    update_productos: function(id, object_productos) { 
        check(Meteor.userId(), String);
        productos.update({_id: id}, {$set: object_productos }); 
    }, 
 
    delete_productos: function(productosId) { 
        check(Meteor.userId(), String);
        productos.remove(productosId); 
    }, 
 
    insert_productos: function(object_productos) { 
        check(Meteor.userId(), String);
        var productosId = productos.insert(object_productos); 
        return productosId; 
    }, 
 
    delete_selected_rutas: function(selectedIds) {
        check(Meteor.userId(), String); 
        rutas.remove(selectedIds); 
    }, 
 
    update_rutas: function(id, object_rutas) { 
        check(Meteor.userId(), String);
        rutas.update({_id: id}, {$set: object_rutas }); 
    }, 
 
    delete_rutas: function(rutasId) { 
        check(Meteor.userId(), String);
        rutas.remove(rutasId); 
    }, 
 
    insert_rutas: function(object_rutas) { 
        check(Meteor.userId(), String);
        var rutasId = rutas.insert(object_rutas); 
        return rutasId; 
    }, 

});
