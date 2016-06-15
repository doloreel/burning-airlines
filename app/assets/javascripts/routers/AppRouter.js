var app = app || {};

app.AppRouter = Backbone.Router.extend({
    routes: {
        ''            : 'indexPage',
        'flight/:id'  : 'flightPage',
    },
    indexPage: function () {
        console.log('backbone index ran');
        var appView = new app.AppView();
        appView.render('search');
    },
    flightPage: function (e) {
        var appView = new app.AppView();
        appView.render('flight');
    }
})
