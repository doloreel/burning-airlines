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
        var result;


        if (originInput.length === 0 && destInput.length > 0 ) {
            result = app.flights.where({destination: destInput});
            result = _.map(result, function(child) { return child.toJSON() });
        } else if (destInput.length === 0 && originInput.length > 0 ) {
            result = app.flights.where({origin: originInput});
            result = _.map(result, function(child) { return child.toJSON() });
        } else if (destInput.length > 0 && originInput.length > 0) {
            result = app.flights.where({origin: originInput});
            result = _.map(result, function(child) { return child.toJSON() });
            result = _.where(result, {destination: destInput});
        } else {
            alert('search something bra')
            return; 
        }

        var $searchResultsUL = $('#searchResults');

        $searchResultsUL.html('');

        result.forEach(function(flight) {
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
