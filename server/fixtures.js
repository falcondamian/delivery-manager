if (Meteor.users.find().count() === 0) {

    var idUser = null;
    idUser = Accounts.createUser({
        username: "falcon",
        email: "falcon@test.com",
        password: "451987"
    });
    Roles.addUsersToRoles(idUser, ['admin','repartidor']);

    idUser = Accounts.createUser({
        username: "cuba",
        email: "cuba@test.com",
        password: "451987"
    });
    Roles.addUsersToRoles(idUser, ['repartidor']);

    idUser = Accounts.createUser({
        username: "juanlu",
        email: "juanlu@test.com",
        password: "451987"
    });
    Roles.addUsersToRoles(idUser, ['repartidor']);

    idUser = Accounts.createUser({
        username: "lucia",
        email: "lucia@test.com",
        password: "451987",
    });
    Roles.addUsersToRoles(idUser, ['repartidor']);
}

if (rutas.find().count() === 0) {
    for (var rutas_index = 0; rutas_index < 5; rutas_index++) {
        var rutaId = rutas.insert({
            nombre: 'Ruta ' + rutas_index
        });

        for (var clientes_index = 0; clientes_index < 5; clientes_index++) {
            clientes.insert({
                nombre: 'Cliente ' + rutas_index + clientes_index,
                direccion: 'Direccion ' + rutas_index + clientes_index,
                telefono: clientes_index,
                rutaId: rutaId
            });
        }

    }
}

if (productos.find().count() === 0) {
    for (var productos_index = 0; productos_index < 5; productos_index++) {
        productos.insert({
            nombre: 'Producto ' + productos_index,
            descripcion: 'Descripcion ' + productos_index
        });
    }
}



