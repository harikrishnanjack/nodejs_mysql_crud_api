var express=require('express');
var bodyParser=require('body-parser');
var cors=require('cors');

var app=express();

var users=require('./routes/users');
app.use('/users',users);
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.listen(8080,function(){
    console.log("connected @8080")
})