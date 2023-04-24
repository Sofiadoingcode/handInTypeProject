import express = require("express");
import morgan = require("morgan");
import 'dotenv/config';
import fs = require("fs");

const app = express();

app.use(express.json());

if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
    console.log("Development mode");
    
}

app.get("/", (req, res) => {
    res.status(200)
        .json({
            status: "success",
            message: "success"
        })

});

app.get("/people", (req, res) => {
    let rawdata = fs.readFileSync('people.json');
    let people = JSON.parse(rawdata.toString());
    
    res.status(200)
        .json({
            status: "success",
            result: people
        })
});


app.post('/people', (req, res) => {
    let data = req.body;
    res.send('Data Received: ' + JSON.stringify(data));
    
    let fileData = fs.readFileSync('people.json');
    let myObject= JSON.parse(fileData.toString());
    myObject.push(data);
    let newData = JSON.stringify(myObject);
    fs.writeFile('people.json', newData, err => {
        // error checking
        if(err) throw err;
    
        console.log("New data added");
    });   


})


app.put("/people/:id", (req, res) => {
    let id = req.params.id;
    let data = req.body;
    res.send('Data Received: ' + JSON.stringify(data) + id);


});

app.get("/people/:id", (req, res) => {
    let id = req.params.id;
    let rawdata = fs.readFileSync('people.json');
    let peopleJSON = JSON.parse(rawdata.toString());
    let people = peopleJSON.people;
    let person = {};
    for (var i = 0; i < people.length; i++) {
        if (people[i].id == id) {
           person = people[i];
        }
    }
    
    res.status(200)
        .json({
            status: "success",
            result: person
        })
});



app.listen(3006, () => {
    console.log("Server is listening to http://localhost:3006");
    
});