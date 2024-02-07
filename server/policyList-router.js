const express = require("express");
const PolicyListModel = require('./Model/policyListModel');
const router = express.Router();

router.get("/Policies", async function (req, res) {

    let result = await PolicyListModel.find({}, { "_id": 0 });

    try {
        console.log("[Read All] - No. of  items get from database : " + result.length);
        res.send(result);
    }
    catch (error) {
        res.status(500).send(error);    
    }
});

module.exports = router;
