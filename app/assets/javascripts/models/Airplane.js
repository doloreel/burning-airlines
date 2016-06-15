var app = app || {};

app.Airplane = Backbone.Model.extend({
    urlRoot: '/airplanes',
    defaults: {
        id: "",
        url: ""
    },
    initialize: function() {

    }
});
