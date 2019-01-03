const express = require("express");
const app = express();
const routes = require('./routes');
const path = require('path');

const port = process.env.port || 3000;

app.use(express.static(path.join(__dirname, 'views')));
app.use(express.static('public'));

app.set("view engine", "ejs");
app.use('/', routes);

app.listen(port, () => {
    console.log("App now listening for requests on port: ", port);
});