Router.configure({
  layoutTemplate: 'main',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound'
});

AccountsTemplates.configureRoute('signIn', {
    path: '/',
    layoutTemplate: 'noHeader',
    template: 'fullPageAtForm',
    redirect: function(){
        if (Roles.userIsInRole(Meteor.user(), ['admin'])) {
          Router.go('/panelControl');
        }
        else {
          Router.go('/pedidosRepartidor');
        }
    }
});

Router.route('usuarios', {
    path: '/usuarios/',
    template: 'accountsAdmin'
});

Router.route('rutas', {
    path: '/rutas/',
    template: 'rutas'
});

Router.route('new_rutas', {
    path: '/rutas/new/',
    template: 'new_rutas'
});

Router.route('edit_rutas', {
    path: '/rutas/:_id/edit/',
    template: 'edit_rutas',
    data: function() { return rutas.findOne(this.params._id); }
});

Router.route('show_rutas', {
    path: '/rutas/:_id/',
    template: 'show_rutas',
    data: function() { return rutas.findOne(this.params._id); }
});

Router.route('productos', {
    path: '/productos/',
    template: 'productos'
});

Router.route('new_productos', {
    path: '/productos/new/',
    template: 'new_productos'
});

Router.route('edit_productos', {
    path: '/productos/:_id/edit/',
    template: 'edit_productos',
    data: function() { return productos.findOne(this.params._id); }
});

Router.route('show_productos', {
    path: '/productos/:_id/',
    template: 'show_productos',
    data: function() { return productos.findOne(this.params._id); }
});

Router.route('clientes', {
    path: '/rutas/:_id/clientes/',
    template: 'clientes',
    waitOn: function() { return Meteor.subscribe('clientesOfRuta', this.params._id);  },
    data: function() { return rutas.findOne(this.params._id); }
});

Router.route('new_clientes', {
    path: '/rutas/:_id/clientes/new/',
    template: 'new_clientes',      
    data: function() {        
        return {            
            ruta: rutas.findOne(this.params._id)           
        };
    }    
});

Router.route('edit_clientes', {
    path: '/rutas/:rutaId/clientes/:_id/edit/',
    template: 'edit_clientes',
    waitOn: function() { return Meteor.subscribe('cliente', this.params._id);  },
    data: function() { return clientes.findOne(this.params._id); }
});

Router.route('show_clientes', {
    path: '/rutas/:rutaId/clientes/:_id/',
    template: 'show_clientes',
    waitOn: function() { return Meteor.subscribe('cliente', this.params._id);  },
    data: function() { return clientes.findOne(this.params._id); }
});

Router.route('repartos', {
    path: '/repartos/',
    template: 'repartos',
    waitOn: function() { 
        return Meteor.subscribe('repartos');
    }
});

Router.route('new_reparto', {
    path: '/reparto/new/',
    template: 'new_reparto'    
});

Router.route('edit_reparto', {
    path: '/reparto/:_id/edit/',
    template: 'edit_reparto',
    waitOn: function() { 
        return Meteor.subscribe('reparto', this.params._id);
    },
    data: function() { return repartos.findOne(this.params._id); }
});

Router.route('show_reparto', {
    path: '/reparto/:_id/',
    template: 'show_reparto',
    waitOn: function() {         
        return Meteor.subscribe('reparto', this.params._id);
    },
    data: function() { return repartos.findOne(this.params._id); }
});

Router.route('pedidos', {
    path: '/repartos/:_id/pedidos/',
    template: 'pedidos',
    waitOn: function() {        
        return [Meteor.subscribe('reparto', this.params._id), Meteor.subscribe('pedidosOfReparto', this.params._id)];
    },
    onBeforeAction: function() { 
       
        var reparto = repartos.findOne(this.params._id);
        this.subscribe('clientesOfRuta', reparto.rutaId);

        this.next();
    },
    data: function() { return repartos.findOne(this.params._id); }
});

Router.route('new_pedidos', {
    path: '/repartos/:_id/pedidos/new/',
    template: 'new_pedidos',
    waitOn: function() {  
        return Meteor.subscribe('reparto', this.params._id);
    },  
    onBeforeAction: function() { 
       
        var reparto = repartos.findOne(this.params._id);
        this.subscribe('clientesOfRuta', reparto.rutaId);

        this.next();
    },    
    data: function() {        
        return {    
                
            reparto: repartos.findOne(this.params._id)          
        };
    }
});

Router.route('edit_pedidos', {
    path: 'repartos/:repartoId/pedidos/:_id/edit/',
    template: 'edit_pedidos',
    waitOn: function() { 
        return [Meteor.subscribe('reparto', this.params.repartoId), Meteor.subscribe('pedido', this.params._id)];  
    },
    onBeforeAction: function() { 
       
        var reparto = repartos.findOne(this.params.repartoId);
        this.subscribe('clientesOfRuta', reparto.rutaId);

        this.next();
    },  
    data: function() { 

        return pedidos.findOne(this.params._id); 
    }
});

Router.route('show_pedidos', {
    path: '/repartos/:repartoId/pedidos/:_id/',
    template: 'show_pedidos',
    waitOn: function() { 

        var reparto = repartos.findOne(this.params.repartoId);
        return [Meteor.subscribe('pedido', this.params._id), Meteor.subscribe('clientesOfRuta', reparto.rutaId)];  
    },
    data: function() { 

        return pedidos.findOne(this.params._id); 
    }
});

Router.route('pedidosRepartidor', {
    path: '/pedidosRepartidor',
    template: 'pedidosRepartidor',
    waitOn: function() {

        var today = new Date();
        today.setHours(0,0,0,0);
        
        return Meteor.subscribe('repartosFechaRepartidor', today, Meteor.userId());
    },
    onBeforeAction: function() {

        var today = new Date();
        today.setHours(0,0,0,0);

        var reparto = repartos.findOne({repartidorId: Meteor.userId(), fecha : today});
        if (reparto) {

            this.subscribe('pedidosOfReparto', reparto._id);
            this.subscribe('clientesOfRuta', reparto.rutaId);
        } 

        this.next();
    }
});

Router.route('panelControl', {
    path: '/panelControl',
    template: 'panelControl',
    waitOn: function() {

        var today = new Date();
        today.setHours(0,0,0,0);
        
        return [Meteor.subscribe('repartosFecha', today), Meteor.subscribe('clientes')];
    },
    onBeforeAction: function () {

        var repartosAux = repartos.find().fetch();
        var idsRepartos = repartosAux.map(function(p) { return p._id });
        
        if (repartosAux && repartosAux.length > 0) {
            this.subscribe('pedidosOfRepartos', idsRepartos);
        }

        this.next();       
    }
});

var requireLogin = function() {  
    if (! Meteor.user()) {    
        if (Meteor.loggingIn()) {
            this.render(this.loadingTemplate);    
        } else {      
            this.render('accessDenied');               
        }
    } else {    
        this.next();  
    }
}

var isAdmin = function() {
    if (! Roles.userIsInRole(Meteor.user(), ['admin'])) {     
        this.render('accessDenied');
    } else {    
        this.next();  
    }
}

Router.onBeforeAction(requireLogin, {except: ['atSignIn']});

Router.onBeforeAction(isAdmin, {except: ['atSignIn', 'pedidosRepartidor']});
