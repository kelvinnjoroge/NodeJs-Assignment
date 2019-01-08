const express = require("express");
const app = express();
const routes = require('./routes');
const path = require('path');
const bodyParser = require('body-parser')

const port = process.env.port || 3000;

app.use(express.static(path.join(__dirname, 'views')));
app.use(express.static('public'));

app.set("view engine", "ejs");

/** bodyParser.urlencoded(options)
 * Parses the text as URL encoded data (which is how browsers tend to send form data from regular forms set to POST)
 * and exposes the resulting object (containing the keys and values) on req.body
 */
app.use(bodyParser.urlencoded({
    extended: true
}));

/**bodyParser.json(options)
 * Parses the text as JSON and exposes the resulting object on req.body.
 */
app.use(bodyParser.json());
app.use('/', routes);

app.listen(port, () => {
    console.log("App now listening for requests on port: ", port);
});