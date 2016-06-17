app.flights = new app.Flights();
app.airplanes = new app.Airplanes();
app.reservations = new app.Reservations();
var oldReservations;
var totalReservations;

$(document).ready(function() {

    var pollsOn = true;
    app.reservations.fetch().done(function(){
      app.airplanes.fetch().done(function(){
        app.flights.fetch().done(function() {
            app.router = new app.AppRouter();
            Backbone.history.start();
            if (pollsOn === true) {
                initPolls();
            }
        });
      });
    });

    var initPolls = function() {
        console.log('init poll fired');
        pollsOn = false;
        if(app.flightSeatsView) {
            (function reservationPoll(){
                console.log('initialising poll');
                setTimeout(function(){
                    console.log('fetching')
                     app.reservations.fetch().done(function(data){
                         console.log('fetched data');
                         app.flightSeatsView.render( app.currentPlane, app.currentFlight );
                         reservationPoll();
                     });
                }, 1000);
            })();
        }
    };
});
