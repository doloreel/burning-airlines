var app = app || {};

app.SearchInputView = Backbone.View.extend({
    el: "#searchInput",
    events: {
        'click button': 'searchFlights'
    },
    searchFlights: function (e) {
        var originInput = this.$el.find("#origin").val();
        var destInput = this.$el.find("#destination").val();
        // FETCH the collection data
        var result = app.flights.where({origin: originInput});

        var $searchResultsUL = $('#searchResults');

        console.log(result);

        result.forEach(function(flightBB) {

            var flight = flightBB.toJSON();
            var flightDetails = '';

                flightDetails += flight.departure_date + " ";
                flightDetails += flight.origin + " ";
                flightDetails += flight.destination + " ";
                flightDetails += flight.updated_at + " ";

            console.log(flightDetails);

            var $flightLi = $('<li>').html(flightDetails)
            $searchResultsUL.append($flightLi);
        })
        
    },
    render: function() {
        var SearchInputViewTemplate = $('#SearchInputViewTemplate').html();
        this.$el.html( SearchInputViewTemplate );
        console.log('SearchInputView.js rendered');
    }
});
