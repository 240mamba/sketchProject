
$(document).ready(function () {

function  clear(){

    //List of variables for function
    var userInput = $('#userInput').val();
    $('#userInput').val(userInput);
    var userPixel= parseInt(userInput);
    var gridWidth = 1/userPixel * 100;
    var gridWidthPercent = gridWidth + "%";
    var c = $('.container');
    var pixelCount = userPixel * userPixel;
    //Actual loop function with basic javascript to speed up higher inputs
    for (var i = 1; i <= pixelCount; i++) {
            var test = document.createElement('div');
            test.className="squares";
            c.append(test);
         }

    //Sets the width and height to the new grid squares
     $('.container div').css('width', gridWidthPercent);
     $('.container div').css('height', gridWidthPercent);

    };


     //Clear button calls function
     $('.clear').click(clear);

     //Enter button calls function
     $('#userInput').keypress(function(e) {
    if(e.which == 13) {
        clear();
    }
  });
});
