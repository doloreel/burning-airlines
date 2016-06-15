var app = app || {};

app.FlightDetailsView = Backbone.View.extend({
    el: '#flightDetails',
    render: function() {
        console.log('flight details view lol')
        this.$el.html('this is being rendered yo')
    }
})
