app.airplanes = new app.Airplanes();

$(document).ready(function() {
    app.router = new app.AppRouter();
    Backbone.history.start();
    app.airplanes.fetch().done(function(data) {
        console.log('fetched');
        console.log(data);
    })
})
