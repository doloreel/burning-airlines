var app = app || {};


app.Flight = Backbone.Model.extend({
    urlRoot: "/flights",
    defaults: {
        flight_id: '',
        plane_id: '',
        departure_date: '',
        origin: '',
        destination: '',
        created_at: '',
        updated_at: '',
    },
    initialize: function () {
        console.log('initialized flight model');
    }
})
