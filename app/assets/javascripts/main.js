app.flights = new app.Flights();

$(document).ready(function() {
    app.router = new app.AppRouter();
    Backbone.history.start(); //
    app.flights.fetch();

    // var sydtony = new app.Flight();
    // sydtony.set({
    //     origin          : 'SYD',
    //     destination     : 'NY',
    // })
    // sydtony.save();
    // app.flights.add(sydtony);
})
