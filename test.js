var parse_quantity = require('./');


var measure = '5GB';
// measure ='allow me to start with 200KG'
var qty = parse_quantity(measure);
console.log(qty);