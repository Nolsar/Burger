const express = require('express');
const exphbs = require("express-handlebars");
var PORT = process.env.PORT || 8080;
const app = express();

// app.get('/myapp/', function(req, res){
//     res.send("Hello from the root application URL");
// });

// app.get('/myapp/test/', function(req, res){
//     res.send("Hello from the 'test' URL");
// });

app.use(express.static("public"));

// Parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.listen(0, () => console.log('Application is running'))


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller");
app.use(routes);


app.get('/burger/', function(req, res){
    // Handlebars requires an object to be sent to the dog.handlebars file. Lucky for us, animals[0] is an object!

    // 1. Send the dog object from the animals array to the dog.handlebars file.
    res.render("burger", burgers[0])
});


app.get("/all-burgers/", function(req, res) {
    // Handlebars requires an object to be sent to the index.handlebars file.

    // 2. Send the animals to the index.handlebars file. Remember that animals is an array and not an object.
    const allBurgers = burgers.filter(burgers => burgers.burgers_name);
    //can also use a for loop here instead of a filter
    res.render("index", {
        //key : value(array)
        burgers: allBurgers
    })
});
  
  // Start our server so that it can begin listening to client requests.
  app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });
  