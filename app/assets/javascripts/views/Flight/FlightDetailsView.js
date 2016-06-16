var app = app || {};

app.FlightDetailsView = Backbone.View.extend({
    el: '#flightDetails',
    render: function(id) {

        console.log('flight details view lol')
        var flightDetailsTemplate = $('#FlightDetailsTemplate').html()
        this.$el.html(flightDetailsTemplate);

        var $detailsDate = this.$el.find('#detailsDate');
        var $detailsFlight = this.$el.find('#detailsFlight');
        var $detailsOrigin = this.$el.find('#detailsOrigin');
        var $detailsDestination = this.$el.find('#detailsDestination');
        console.log('id: ', id);
        var currentFlight = app.flights.get(id).toJSON();
        console.log(currentFlight);

        $detailsDate.text(currentFlight.departure_date);
        $detailsFlight.text(currentFlight.flight_number);
        $detailsOrigin.text(currentFlight.origin);
        $detailsDestination.text(currentFlight.destination);

    }
});
