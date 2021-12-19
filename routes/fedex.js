const router = require('express').Router();
const validateFEDEX = require('../validator').validateFEDEX;

router.post('/', async (req, res) => {
    const { error } = validateFEDEX(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    var shipment = {
        "service": req.body.service,
        "width": req.body.width,
        "length": req.body.length,
        "height": req.body.height,
        "weight": req.body.weight,
    }
    return res.status(201).send("shipment has been placed successfully");
})
module.exports = router;
