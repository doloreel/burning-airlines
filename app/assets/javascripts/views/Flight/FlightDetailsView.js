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
        var currentFlight = app.flights.get(id);
        console.log(currentFlight);

        





    }
});
