var userPixel = 2;
var gridWidth = 1/userPixel * 100;
var gridWidthPercent = gridWidth + "%";

$(document).ready(function () {

    var pixelCount = userPixel * userPixel;
         for (var i = 1; i <= pixelCount; i++) {
             $('.container').append('<div class="squares"></div>');
         }
         $('.squares').css('width', gridWidthPercent);
         $('.squares').css('height', gridWidthPercent);
         
     });



var gridString = gridWidthPercent.toString();

var styles = {"width":gridWidthPercent, "height":gridWidthPercent};



console.log(gridString);
