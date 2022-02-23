////////////////////////
//Dependencies//////////
////////////////////////
const express = require("express");


////////////////////////
//Application Object////
////////////////////////
const app = express();

////////////////////////
//Routes////////////////
////////////////////////

// home route to say "hello world" to test server is working
app.get("/", (req, res) => {
    //res.jon let's us sedn a response as JSON data
    res.json({
        response: "Hello My World"
    })
})

// Dogs Index Route >> Send All Turtles
app.get("/dogs", (req, res) => {
    // send the dogs array as JSON
    res.json(dogs)
})

// Dogs Show Route (Send One Dog)
app.get("/dogs/:index", (req, res) => {
    // send dog as json
    res.json(dogs[req.params.index])
})


///////////////////////////
///////////////////////////
///////////////////////////

////////////////////////
//Listener//////////////
////////////////////////
///We chose a non 3000 port because react dev server uses 3000, the highest possible port is 65535
// Why? cause its' the largest 16-bit integer, fun fact!
// But because we are "elite" coders we will use 1337
app.listen(1337, () => console.log("Listening on port 1337"))


/////////////////////////////////////////////////////////
//The Data///////////////////////////////////////////////
/////////////////////////////////////////////////////////
const dogs = [
    {name: "Lassie", role: "runner"},
    {name: "Chico", role: "runner"},
    {name: "Brutus", role: "runner"},
    {name: "Monty", role: "runner"},
]