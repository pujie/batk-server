var express = require('express'),
app = express(),
path = require('path'),
con = require('./js/connections.js'),
query = require('./js/queries.js'),
bodyParser = require('body-parser');
app.engine("html",require("ejs").renderFile);
    app.set('views',path.join(__dirname,'views'));
    app.use(express.static(__dirname+'views'));

app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS")
    next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.get('/getproducts',(req,res) => {
    console.log("Query",query.getProducts());
    con.getdata(query.getProducts(),result => {
        console.log("Result",result);
        res.send(result);
    })
})
app.post('/insertproduct',(req,res) => {
    console.log("Query",query.insertProduct(req.body));
    con.getdata(query.insertProduct(req.body),result => {
        console.log("Result",result);
        res.send(result);
    })
})
app.post('/updateproduct',(req,res) => {
    console.log("Query",query.updateProduct(req.body));
    con.getdata(query.updateProduct(req.body),result => {
        console.log("Result",result);
        res.send(result);
    })
})
app.listen(process.env.PORT || 1900);
