app.flights = new app.Flights();

$(document).ready(function() {
    app.router = new app.AppRouter();
    Backbone.history.start();
    app.flights.fetch();

    var sydtony = new app.Flight();
    sydtony.set({
        flight_id       : '',
        plane_id        : '',
        departure_date  : '',
        origin          : '',
        destination     : '',
        created_at      : '',
        updated_at      : ''
    })
    sydtony.save();
})
