var app = app || {};

app.Reservations = Backbone.Collection.extend({
    url: "/reservations",
    model: app.Reservation,
    initialize: function () {
        console.log('initialized res collection');
        this.on('change', function () {
          console.log("Collection changed");
        });
    }
});
