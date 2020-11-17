/** "npm install connect serve-static" is required to run the static server **/

var connect = require('connect');
var serveStatic = require('serve-static');

connect()
    .use(serveStatic(__dirname))
    .listen(8080, () => console.log('Server ProjetDataviz running on http://localhost:8080...'));