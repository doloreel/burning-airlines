app.flights = new app.Flights();
app.airplanes = new app.Airplanes();

$(document).ready(function() {

    app.airplanes.fetch().done(function(){
      app.flights.fetch().done(function() {
          app.router = new app.AppRouter();
          Backbone.history.start(); //
      });
    });





});
