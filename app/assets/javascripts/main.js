app.flights = new app.Flights();

$(document).ready(function() {

    app.flights.fetch().done(function() {
        app.router = new app.AppRouter();
        Backbone.history.start(); //
    });


    var init = function () {

    }




    // var sydtony = new app.Flight();
    // sydtony.set({
    //     origin          : 'SYD',
    //     destination     : 'NY',
    // })
    // sydtony.save();
    // app.flights.add(sydtony);
})
