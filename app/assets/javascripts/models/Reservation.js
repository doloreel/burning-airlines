var app = app || {};

app.Reservation = Backbone.Model.extend({
    urlRoot: "/reservations",
    initialize: function () {
        console.log('initialized res model');
    }
});
