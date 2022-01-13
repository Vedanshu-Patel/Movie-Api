var express = require("express");
var app = express();

var request = require("request");

app.get("/search", function(req, res) {
    res.render("search.ejs")
});

app.get("/results", function(req, res){
    let s=req.query.x;
    let url ="https://www.omdbapi.com/?apikey=[]&s=" + s;
    request(url,function(error, response,body){
    if(!error && response.statusCode==200){
        let parsedData=JSON.parse(body);
        res.render("results.ejs",{datav:parsedData});
    }
    else{
        console.log("Something Went Wrong!!");
    }
});
});
app.listen(8008, function(){
    console.log("Movie app Started!");
});
