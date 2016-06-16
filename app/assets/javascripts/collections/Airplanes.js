var app = app || {};

app.Airplanes = Backbone.Collection.extend({
    url: '/airplanes',
    model: app.Airplane,
    initialize: function () {
        console.log('airplane collection initialised');
        // this.on('add', function (airplane) {
        //     var airplaneView = new app.AirplaneView({
        //         model: airplane
        //     });
        //     airplaneView.render();
        // })
    }
});
