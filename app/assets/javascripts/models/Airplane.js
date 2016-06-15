var app = app || {};

app.Airplane = Backbone.Model.extend({
    urlRoot: '/airplanes',
    defaults: {
        id: "",
        url: "",
        plane_id: "",
        plane_model: "",
        row: 0,
        column: 0,
        created_at: "",
    },
    initialize: function() {

    }
});
