var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    burger.all(function (data) {
        res.render("index", {burger_data: data})
    });
});

router.post("/burger/create", function (req, res) {
    burger.create([
        "name", "devoured"
    ], [
        req.body.name, req.body.devoured
    ], function (result) {
        console.log(result)
        // Send back the ID of the new quote
        res.json({ id: result.insertId });
        res.redirect("/");
    });
});

router.put("/burger/:id", function (req, res) {
    burger.update(req.params.id, function(req, res) {
        console.log(result);
        res.sendStatus(200);
    })

})



// Export routes for server.js to use.
module.exports = router;
