const express=require('express')
const bodyParser = require('body-parser');
const fedex = require("./routes/fedex");
const ups = require("./routes/ups");


var app=express()
app.use(bodyParser.json());

app.use(bodyParser.json());

app.use('/addShipment/FedEx',fedex);
app.use('/addShipment/UPS',ups);

app.listen(8080,function()
        {
            console.log('Server Is Down'); })

