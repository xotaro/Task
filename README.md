# How To Open
First Run npm install <br />
open the server by running: node app.js <br />
the server is running on port 8080 :- http://localhost:8080/<br />
send post requests to either /shipment/FedEx/ or /shipment/UPS/ with request body that contains:<br />
 service[String] and width,height,length,weight which are all objects having a value[number] and unit[String] <br />
 ## Example Body for post Request on http://localhost:8080/shipment/FedEx/: <br/> 
{ <br />
"service":"fedexGroud", <br />
"width":{"value":30,"unit":"cm"}, <br />
"height":{"value":30,"unit":"cm"}, <br />
"length":{"value":30,"unit":"cm"}, <br />
"weight":{"value":30,"unit":"gram"} <br />
}
