const express = require("express");
const app = express();
const routes = require('./routes');

const port = process.env.port || 3000;
app.set("view engine", "ejs");

app.use('/', routes);

app.listen(port, () => {
    console.log("App now listening for requests on port: ", port);
});