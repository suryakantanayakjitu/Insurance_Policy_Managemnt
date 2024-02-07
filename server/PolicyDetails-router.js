const express = require("express");
const PolicyDetailsModel = require('./Model/policyDetailsModel');
const router = express.Router();

router.get("/PolicyDetails", async function (req, res) {

    let result = await PolicyDetailsModel.find({}, { "_id": 0 });

    try {
        console.log("[Read All] - No. of  items get from database : " + result.length);
        res.send(result);
    }
    catch (error) {
        res.status(500).send(error);    
    }
});
module.exports = router;
