const express = require('express')
const bodyParser = require('body-parser');
const fedex = require("./routes/fedex");
const ups = require("./routes/ups");
const app = express()

app.use(bodyParser.json());
app.use(bodyParser.json());
app.use('/shipment/FedEx', fedex);
app.use('/shipment/UPS', ups);

app.listen(8080, function () {
    console.log('Server Is Down');
})

