import express = require("express");
import morgan = require("morgan");
import 'dotenv/config';
import fs = require("fs");

const app = express();




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


app.get("/hello/:name", (res, req) => {
    

})

app.listen(3006, () => {
    console.log("Server is listening to http://localhost:3006");
    
});