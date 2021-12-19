const router = require('express').Router();
const validateUPS = require('../validator').validateUPS;

router.post('/UPSExpress', async (req, res) => {
   
    
        const {error}= validateUPS(req.body);
        if(error) return res.status(400).send(error.details[0].message);

        var shipment={
            "service":"UPSExpress",
            "width":req.body.width,
            "length":req.body.length,
            "height":req.body.height,
            "weight":req.body.weight,
        }
        return res.send(shipment);

 
})

router.post('/UPS2DAY', async (req, res) => {
   
    
        const {error}= validateUPS(req.body);
        if(error) return res.status(400).send(error.details[0].message);

        var shipment={
            "service":"UPS2DAY",
            "width":req.body.width,
            "length":req.body.length,
            "height":req.body.height,
            "weight":req.body.weight,
        }
        return  res.send(shipment);

  
})
module.exports = router;
