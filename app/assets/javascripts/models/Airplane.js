var app = app || {};

app.Airplane = Backbone.Model.extend({
    urlRoot: '/airplanes',
    defaults: {
        id: "",
        plane_model: "",
        rows: 0,
        columns: 0,
        created_at: "",
    },
    initialize: function() {

    }
});
