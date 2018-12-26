const express = require('express');
const bodyParser = require('body-parser');
const user = require('./routes/user');
const cors=require("cors");
const product=require("./routes/product");
const details=require("./routes/details");
var app = express();
app.listen(2500);
//配置bodyParser
app.use(bodyParser.urlencoded({
    extended: false
}));
//托管静态资源
app.use(express.static('static'));
//  跨域  
app.use(cors({
    origin:["http://127.0.0.1:2501",
    "http://localhost:2501"],
    credentials:true
}))
//挂载路由器
app.use('/user',user);
app.use('/product',product);
// localhost:2500/product?lid=1
app.use("./details",details);