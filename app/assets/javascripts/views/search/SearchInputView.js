var app = app || {};

app.SearchInputView = Backbone.View.extend({
    el: "#searchInput",
    events: {
        'click button': 'searchFlights',
        'click .flightRecord': 'goToFlight'
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
            
            var flightDetails = '<a href="flight/';
                flightDetails += flight.id + '"> '
                flightDetails += flight.departure_date + " ";
                flightDetails += flight.origin + " ";
                flightDetails += flight.destination + " ";
                flightDetails += flight.updated_at + " </a>";

            console.log(flightDetails);

            var $flightLi = $('<li>').html(flightDetails)
                $flightLi.addClass('flightRecord')
            $searchResultsUL.append($flightLi);
        })

        $('#searchResults li a').on('click', function (e) {
            e.preventDefault();
            var hrefAttr = $(e.target).attr('href');
            app.router.navigate(hrefAttr, {trigger: true});
        })

    },
    goToFlight: function (e) {
        e.preventDefault();
        console.log('hi');
        console.log(e.currentTargert.value())
    },
    render: function() {
        var SearchInputViewTemplate = $('#SearchInputViewTemplate').html();
        this.$el.html( SearchInputViewTemplate );
        console.log('SearchInputView.js rendered');
    }
});
