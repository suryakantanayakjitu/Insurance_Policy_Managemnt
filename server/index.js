const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");  

const PoliciesRouter = require('./policyList-router');
const PolicyDetailsRouter = require('./PolicyDetails-router');

var app=express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use("/api", PoliciesRouter);
app.use("/api", PolicyDetailsRouter);

app.get("/", function(req,res)
{
    res.send("Welcome to Express JS API Application");
});

var server=app.listen(3005,function() {});
console.log("Server Started. URL:http://localhost:3005");