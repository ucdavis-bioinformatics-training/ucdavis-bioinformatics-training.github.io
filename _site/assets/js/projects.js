$(document).ready(function(){
  var COLORS = [
    '#022851'
  ];

  var PATTERNS = [
  	'octogons',
  	'overlappingCircles',
  	'plusSigns',
  	'xes',
  	'sineWaves',
  	'hexagons',
  	'overlappingRings',
  	'plaid',
  	'triangles',
  	'squares',
  	'concentricCircles',
  	'diamonds',
  	'tessellation',
  	'nestedSquares',
  	'mosaicSquares',
  	'chevrons'
  ];

  $('.geopattern').each(function(){
    var options = {
      color: COLORS[ getRandomInt( 0, COLORS.length ) ],
      generator: PATTERNS[ getRandomInt( 0, PATTERNS.length ) ]
    };

    $(this).geopattern( options );

    var repoName = $(this).find( '.card-title' ).text();
    $(this).find( '.card-title' ).html( repoName.replace( /_/g, '_<wbr>' ).replace( /-/g, '-<wbr>' ) );
  });
});

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function toggleForked(){
  if ($('.fork-switch').prop('checked')) {
    $('div[id=forked]').removeClass('hidden');
  } else {
    $('div[id=forked]').addClass('hidden');
  }
}
