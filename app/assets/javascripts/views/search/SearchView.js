var app = app || {};

app.SearchView = Backbone.View.extend({
    el: "#container",
    render: function(){
        console.log('container rendered');

        // RENDER
        var searchViewTemplate = $('#searchViewTemplate').html();
        this.$el.html(searchViewTemplate)
        // SearchInputView()

        var searchInputView = new app.SearchInputView();
        searchInputView.render()

        // SearchResults()  
        var searchResultsView = new app.SearchResults();
        searchResultsView.render()


    }
});
