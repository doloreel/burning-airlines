app.flights = new app.Flights();
app.airplanes = new app.Airplanes();
app.reservations = new app.Reservations();
var oldReservations;
var totalReservations;

$(document).ready(function() {

    app.reservations.fetch().done(function(){
      app.airplanes.fetch().done(function(){
        app.flights.fetch().done(function() {
            app.router = new app.AppRouter();
            Backbone.history.start();
        });
      });
    });
});
