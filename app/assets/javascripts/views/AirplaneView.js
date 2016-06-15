var app = app || {};

app.AirplaneView = Backbone.View.extend({
    tagName: 'li',
    render: function() {
        var content = this.model.get('url');
        this.$el.text( content );
        // target element and change that element
        this.$el.prependTo('#airplanes');
    }
})
