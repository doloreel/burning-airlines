var app = app || {}

app.SeatsView = Backbone.View.extend({
    el: '#flightSeats',
    render: function(planeModel, currentFlight) {

        var flightSeatsTemplate = $("#FlightSeatsTemplate").html();
        this.$el.html( flightSeatsTemplate );

        var seatsDetailsView = new app.SeatsDetailsView();
        seatsDetailsView.render(planeModel, currentFlight);

        // CREATE RESERVATIONS MODEL
        // GET ALL RESERVATION




    }
});
