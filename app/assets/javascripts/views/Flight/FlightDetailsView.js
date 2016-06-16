var app = app || {};

app.FlightDetailsView = Backbone.View.extend({
    el: '#flightDetails',
    render: function(currentFlight, planeModel) {

        console.log('flight details view lol')
        var flightDetailsTemplate = $('#FlightDetailsTemplate').html()
        this.$el.html(flightDetailsTemplate);

        var $detailsDate = this.$el.find('#detailsDate');
        var $detailsFlight = this.$el.find('#detailsFlight');
        var $detailsOrigin = this.$el.find('#detailsOrigin');
        var $detailsDestination = this.$el.find('#detailsDestination');
        var $planeID = this.$el.find('#planeID');
        var $planeModel = this.$el.find('#planeModel');
        // var currentFlight = app.flights.get(id).toJSON();
        console.log(currentFlight);

        // var planeModel = app.airplanes.get(currentFlight.airplane_id).toJSON();
        console.log(planeModel);

        $detailsDate.text(currentFlight.departure_date);
        $detailsFlight.text(currentFlight.flight_number);
        $detailsOrigin.text(currentFlight.origin);
        $detailsDestination.text(currentFlight.destination);
        $planeID.text(currentFlight.airplane_id);
        $planeModel.text(planeModel.plane_model);


    }
});
