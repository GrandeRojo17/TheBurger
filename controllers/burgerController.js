//DEPENDENCIES
var express = require("express");
var router = express.Router();
//Import the burger Model
var burger = require("../models/burger.js");

router.get("/", async (req, res) => {
    try {
        const data = await burger.all();
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    } catch (err) {
        console.error(err);
        res.render("index", { burgers: [], error: err })
    }
});

router.post("/api/burger", async (req, res) => {
    console.log(req)
    const response = await burger.create(req.body.data.burgerName);
    console.log(response);
    res.json({
        status: 200
    });
});

router.put("/api/burger/:id", async (req, res) => {
    console.log(req)
    const response = await burger.update(req.params.id);
    console.log(response);
    res.json({
        status: 200
    });
});

module.exports = router;


// Export routes for server.js to use.
module.exports = router;
