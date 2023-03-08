import express = require("express");
import morgan = require("morgan");

const app = express();

if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
    console.log("Development mode");
    
}

app.get("/", (req, res) => {
    res.status(200)
        .json({
            status: "success",
            message: "FLODHEST"
        })

});
app.get("/hello/:name", (res, req) => {
    

})

app.listen(3006, () => {
    console.log("Server is listening to http://localhost:3006");
    
});