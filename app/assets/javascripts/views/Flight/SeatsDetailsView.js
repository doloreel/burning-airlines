var app = app || {};

app.SeatsDetailsView = Backbone.View.extend({
    el: '#seatsDetails',
    render: function(id) {

        $seatCols = $('#seatCols')
        $seatRows = $('#seatRows')
        $seatsTotal = $('#seatsTotal')
        $seatsLeft = $('#seatsLeft')

        var flight = app.flights.get(id).toJSON();

        $seatCols.html();
        $seatRows.html();
        $seatsTotal.html();
        $seatsLeft.html();
    }
});
