var app = app || {};

app.Flights = Backbone.Collection.extend({
    url: "/flights",
    model: app.Flight,
    initialize: function () {
        console.log('initialized flights collection');
        this.on('add', function (flight) {
            console.log('you added ', flight); 
        })
    }
})
