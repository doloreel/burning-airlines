var app = app || {};
app.seats = [];
app.currentFlight = "";
app.currentPlane = "";

app.SeatsDetailsView = Backbone.View.extend({
    el: '#seatsDetails',

    events: {
      'click #reserveSeat': 'seatReserved'
    },

    seatReserved: function(e){

        var view = this;

        app.seats.forEach(function(seat) {
          var reservation = new app.Reservation();
          reservation.set({
            seat: seat,
            flight_id: app.currentFlight.flight_number,
            plane_id: app.currentPlane.id,
            user_id: app.currentUser.id
          });

          var sameReservations = app.reservations.where({
            seat: seat,
            flight_id: app.currentFlight.flight_number,
            plane_id: app.currentPlane.id,
            user_id: app.currentUser.id
          });

          if ( sameReservations.length === 0 ) {
            reservation.save().done(function () {
              view.render( app.currentPlane, app.currentFlight );
            });
            app.reservations.add( reservation );
          }
        });
    },

    render: function(planeModel, currentFlight) {
        $(".allColumns").html('');
        app.currentFlight = currentFlight;
        app.currentPlane = planeModel;

        var seatsTotal = planeModel.columns * planeModel.rows;

        var $seatsDetails = $("#seatsDetails");
        var rows = 1;
        var columnLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S"];
        var columnCounter = 0;
        var allReservations = app.reservations.toJSON();
        var currentReservation = _.where(allReservations, {flight_id: app.currentFlight.flight_number } );

        var $containerDiv = $("<div>").addClass("allColumns");
        _.times(planeModel.columns, function(){
            $divCol = $("<div class='seatCol'>");
            $span = $("<span class='colLetter'>");
            $span.html(columnLetters[columnCounter]);
            $divCol.append($span);
              _.times(planeModel.rows, function(i){
                $div = $("<div class='seat'>");
                  var currentSeatOnPlane = rows+columnLetters[columnCounter];
                  $div.html(rows+columnLetters[columnCounter]);

                  currentReservation.forEach(function(reservation) {
                      if (reservation.seat === currentSeatOnPlane) {
                        if ( reservation.user ) {
                          var resName = reservation.user.name;
                          $div.addClass('reserved');
                          $div.html(resName);
                        }
                      }
                  });

                  $divCol.append($div);
                  rows += 1;
                });
              rows = 1;
              columnCounter += 1;
              $containerDiv.append($divCol);
        });
        $seatsDetails.append($containerDiv);
        $(".seat").on("click", function(e){

          var $currentCell = $(e.currentTarget);

          if ($currentCell.hasClass("reserved")) {
              console.log("Already reserved");
              $currentCell.toggleClass("reserved");
              var index = app.seats.indexOf( $currentCell.html() );
              app.seats.splice(index, 1);
              console.log(app.seats);
          } else {
              app.seats.push( $currentCell.html() );
              $currentCell.toggleClass("reserved");
          }
        });
      }
});
