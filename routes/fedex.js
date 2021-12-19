const router = require('express').Router();
const validateFEDEX = require('../validator').validateFEDEX;

router.post('/fedexAir', async (req, res) => {
   
    
        const {error}= validateFEDEX(req.body);
        if(error) return res.status(400).send(error.details[0].message);

        var shipment={
            "service":"fedexAir",
            "width":req.body.width,
            "length":req.body.length,
            "height":req.body.height,
            "weight":req.body.weight,
        }
        return res.send(shipment);
        
   

})

router.post('/fedexGround', async (req, res) => {
   
   
        const {error}= validateFEDEX(req.body);
        if(error) return res.status(400).send(error.details[0].message);

        var shipment={
            "service":"fedexGround",
            "width":req.body.width,
            "length":req.body.length,
            "height":req.body.height,
            "weight":req.body.weight,
        }
        return res.send(shipment);
        

    

})
module.exports = router;
