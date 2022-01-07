let request=require("request");
request("http://www.omdbapi.com/?t=john&plot=full",function(error, response,body){
    if(!error && response.statusCode==200){
        let parsedData=JSON.parse(body);
        console.log(parsedData);
    }
    else{
        console.log("Something Went Wrong!!");
    }
});