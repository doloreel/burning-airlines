var app = app || {}

app.FlightSeatsView = Backbone.View.extend({
    el: '#flightSeats',
    render: function(id) {
        this.$el.html(id);
        var seatsDetailsView = new app.SeatsDetailsView();
        seatsDetailsView.render(id);

        // CREATE RESERVATIONS MODEL
        // GET ALL RESERVATION
        

    }
});
