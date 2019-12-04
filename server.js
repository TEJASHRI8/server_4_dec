var express =require('express');
var app=express();
var productRouter=require('./routes/product')
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); 
    res.header("Access-Control-Allow-Methods", "GET,PUT,DELETE,POST"); 
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get("/",(request,response)=>
response.send("I am server"));
app.use("/product",productRouter);

app.listen(7778,()=>{
    console.log("Server started on 7777!!!!")
})