var express=require('express');
var productRouter=express();
var mysql=require('mysql');
var config=require('config');
productRouter.use(express.json());

var connection=mysql.createConnection({
    host:config.get("host"),
    user:config.get("user"),
    password:config.get("password"),
    database:config.get("database"),
    port:config.get("port")
})

connection.connect();

productRouter.get("/",(request,response)=>{
    var query="select title,description1,price from product";
    connection.query(query,(err,result)=>
    {
        if(err==null)
        {
            console.log("Select done!!!!");
            response.send(JSON.stringify(result))
        }
        else
        {
            console.log(err);
            response.send(JSON.stringify(err))
        }
    })
})

productRouter.post("/",(request,response)=>{
    var price=request.body.price;
    var {title,description1}=request.body;
    var query=`insert into product (title,description1,price) values('${title}','${description1}','${price}')`;
    connection.query(query,(err,result)=>
    {
        if(err==null)
        {
            console.log("insert done!!!!");
            response.send(JSON.stringify(result))
        }
        else
        {
            console.log(err);
            response.send(JSON.stringify(err))
        }
    })
})

productRouter.put("/:id",(request,response)=>{
    var id=request.params.id;
    var {title,description1,price}=request.body;
    var query=`update product set title='${title}',description1='${description1}',price='${price}' where id='${id}'`;
    connection.query(query,(err,result)=>
    {
        if(err==null)
        {
            console.log("update done!!!!");
            response.send(JSON.stringify(result))
        }
        else
        {
            console.log(err);
            response.send(JSON.stringify(err))
        }
    })
})

productRouter.delete("/:id",(request,response)=>{
    var id=request.params.id;
   
    var query=`delete from product  where id='${id}'`;
    connection.query(query,(err,result)=>
    {
        if(err==null)
        {
            console.log("delete done!!!!");
            response.send(JSON.stringify(result))
        }
        else
        {
            console.log(err);
            response.send(JSON.stringify(err))
        }
    })
})





module.exports=productRouter