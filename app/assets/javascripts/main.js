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
        pollsOn = false;
        if(app.flightSeatsView) {
            (function reservationPoll(){
                setTimeout(function(){
                     app.reservations.fetch().done(function(data){
                         app.flightSeatsView.render( app.currentPlane, app.currentFlight );
                         reservationPoll();
                     })
                }, 1000)
            })();
        }
    }



});
