const express = require("express");

const router = express.Router();

// Import the model (cat.js) to use its database functions.
const burgers = require("../model/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burgers.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function(req, res) {
  burgers.create({name: req.body.burger_name, Eaten: req.body.devoured}, function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", function(req, res) {
  const condition = {id: req.params.id};

  console.log("condition", condition);
  console.log(req.body.devoured);
  const updateValues = {
    // change boolean to tiny int
    devoured: (req.body.devoured === "true" ? 1 : 0)
  };
  console.log(updateValues);
  burgers.update(
    updateValues,
    condition,
    function(result) {
      if (result.affectedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();

    }
  );
});

// Export routes for server.js to use.
module.exports = router;