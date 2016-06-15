var app = app || {};

app.AppView = Backbone.View.extend({
    el:'#main',
    render: function (view) {

        console.log('APP VIEW RENDERING');
        var appViewTemplate = $("#appViewTemplate").html();
        this.$el.html( appViewTemplate );

        if (view === 'search') {
            var searchView = new app.SearchView();
            searchView.render();
        }

        if (view === 'flight') {
            
        }

        // USE THE VIDEO

    }
})
