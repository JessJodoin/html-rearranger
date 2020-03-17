var below = ['Potato', 'Turnip', 'Carrot', 'Onion'];

var $h2b = $('<h2>Below ground veggies!</h2>');
var $h2a = $('<h2>Above ground veggies!</h2>');
var $ul = $('<ul>')

$('body').prepend($h2a);
$('body').prepend($ul);

below.forEach(function (veg) {
  var $li = $('<li>');
  $li.html(veg);
  $ul.append($li);
});

$('body').prepend($h2b);

$('.below').hide();
