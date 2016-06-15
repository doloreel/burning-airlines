var app = app || {};

app.FlightView = Backbone.View.extend({
    el: '#container',
    render: function () {

        var flightViewTemplate = $('#FlightViewTemplate').html();
        this.$el.html(flightViewTemplate);

        var flightDetailsView = new app.FlightDetailsView();
        flightDetailsView.render();
    }
})
