let express = require("express");
let routes = express.Router();

routes.get("/",(req,res)=>{
    res.statusCode = 200;
    res.setHeader("constent-type","text/html");
    res.end('<h1>ola</h1>');
});
module.exports = routes ;

 