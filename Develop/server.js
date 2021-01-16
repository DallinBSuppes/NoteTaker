const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const apiRouter = require('11-express\02-Homework\Develop\routes\api.js')
const htmlRouter = require('11-express\02-Homework\Develop\routes\html.js')

let port = process.env.PORT || 5000;


app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use( express.static('public'));


require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT, function() {
    console.log("PORT GOING", PORT);
})