var app = app || {}

app.SeatsView = Backbone.View.extend({
    el: '#flightSeats',
    render: function(planeModel) {

        var flightSeatsTemplate = $("#FlightSeatsTemplate").html();
        this.$el.html( flightSeatsTemplate );

        var seatsDetailsView = new app.SeatsDetailsView();
        seatsDetailsView.render(planeModel);

        // CREATE RESERVATIONS MODEL
        // GET ALL RESERVATION

        


    }
});
