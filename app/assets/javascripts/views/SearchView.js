var app = app || {};

app.SearchView = Backbone.View.extend({
    el: "#container",
    render: function(){
        console.log('container rendered');

        // RENDER

        // SearchInputView()

        var searchInputView = new app.SearchInputView();
        searchInputView.render()

        // SearchResults()

        var searchResultsView = new app.SearchResults();
        searchResultsView.render()


    }
});
