open the server by running: node app.js
the server is running on port 8080 :- http://localhost:8080/
send post requests to either /shipment/FedEx/ or /shipment/UPS/ with request body that contains:
 service[String] and width,height,length,weight which are all objects having a value[number] and unit[String]