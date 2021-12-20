# How To Open
open the server by running: node app.js <br />
the server is running on port 8080 :- http://localhost:8080/<br />
send post requests to either /shipment/FedEx/ or /shipment/UPS/ with request body that contains:<br />
 service[String] and width,height,length,weight which are all objects having a value[number] and unit[String]
