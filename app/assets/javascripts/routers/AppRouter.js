var app = app || {};

app.AppRouter = Backbone.Router.extend({
    routes: {
        '': 'index'
    },
    index: function () {
        console.log('backbone index ran');
        var appView = new app.AppView();
        appView.render();
    }
})
