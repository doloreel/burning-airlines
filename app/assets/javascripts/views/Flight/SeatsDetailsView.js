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
        console.log(app.seats.length);

        app.seats.forEach(function(seat) {
          var reservation = new app.Reservation();
          reservation.set({
            seat: seat,
            flight_id: app.currentFlight.flight_number,
            plane_id: app.currentPlane.id,
            user_id: app.currentUser.id
          });
          reservation.save();
          app.reservations.add( reservation );
        });
    },

    render: function(planeModel, currentFlight) {

        app.currentFlight = currentFlight;
        app.currentPlane = planeModel;

        $seatCols = $('#seatCols');
        $seatRows = $('#seatRows');
        $seatsTotal = $('#seatsTotal');
        $seatsLeft = $('#seatsLeft');

        var seatsTotal = planeModel.columns * planeModel.rows;
        // var seatsLeft = seatsTotal - reservations;

        $seatCols.html(planeModel.columns);
        $seatRows.html(planeModel.rows);
        $seatsTotal.html(seatsTotal);
        // $seatsLeft.html(seatsLeft);

        var $seatsDetails = $("#seatsDetails");
        var rows = 1;
        var columnLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S"];
        var columnCounter = 0;
        var allReservations = app.reservations.toJSON();
        // console.log(allReservations);

        _.times(planeModel.columns, function(){
            $divCol = $("<div class='seatCol'>");
            $span = $("<span class='colLetter'>");
            $span.html(columnLetters[columnCounter]);
            $divCol.append($span);
              _.times(planeModel.rows, function(i){
                $div = $("<div class='seat'>");
                  var currentSeatOnPlane = rows+columnLetters[columnCounter];
                  $div.html(rows+columnLetters[columnCounter]);

                  allReservations.forEach(function(reservation) {
                      if (reservation.seat === currentSeatOnPlane) {
                        var resName = reservation.user.name;
                        $div.addClass('reserved');
                        $div.html(resName);
                      }
                  });

                  $divCol.append($div);
                  rows += 1;
                });
              rows = 1;
              columnCounter += 1;
              $seatsDetails.append($divCol);
        });
        $(".seat").on("click", function(e){

          var $currentCell = $(e.currentTarget);

          if ($currentCell.hasClass("reserved")) {
              console.log("Already reserved");
          } else {
              app.seats.push( $currentCell.html() );
              $currentCell.toggleClass("reserved");
          }
        });
      }
});
