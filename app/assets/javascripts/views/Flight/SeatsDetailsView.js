var app = app || {};

app.SeatsDetailsView = Backbone.View.extend({
    el: '#seatsDetails',

    render: function(planeModel) {

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

        _.times(planeModel.columns, function(){
            $divCol = $("<div class='seatCol'>");
            $span = $("<span class='colLetter'>");
            $span.html(columnLetters[columnCounter]);
            $divCol.append($span);
              _.times(planeModel.rows, function(i){
                $div = $("<div class='seat'>");
                  $div.html(rows+columnLetters[columnCounter]);
                  $divCol.append($div);
                  rows += 1;
                });
              rows = 1;
              columnCounter += 1;
              $seatsDetails.append($divCol);
        });
        $(".seat").on("click", function(e){
          var $currentCell = $(e.currentTarget);
          $currentCell.toggleClass("reserved");
        });
      }
});
