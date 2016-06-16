var app = app || {};

app.FlightView = Backbone.View.extend({
    el: '#container',
    render: function (id) {
        var currentFlight = app.flights.get(id).toJSON();
        var planeModel = app.airplanes.get(currentFlight.airplane_id).toJSON();

        var flightViewTemplate = $('#FlightViewTemplate').html();
        this.$el.html(flightViewTemplate);
        var flightDetailsView = new app.FlightDetailsView();
        flightDetailsView.render(currentFlight, planeModel);
        var flightSeatsView = new app.SeatsView();
        flightSeatsView.render(planeModel);
    }
})
