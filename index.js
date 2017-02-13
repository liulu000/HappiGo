var express = require('express');
var app = express();
app.use(express.static('public'));
// 设置跨域访问
app.all('*',function (req,res,next){
  res.header("Access-Control-Allow-Origin", "*");
  next();
})
app.get('/list', function (req,res){
  res.sendFile(__dirname+'/data/1.json');
});
app.get('/list1', function (req,res){
  res.sendFile(__dirname+'/data/1.json');
});
app.get('/list3', function (req,res){
  res.sendFile(__dirname+'/data/3.json');
});
app.get('/Calssify', function (req,res){
  res.sendFile(__dirname+'/data/20.json');
});

app.get('/Classify-brank', function (req,res){
  res.sendFile(__dirname+'/data/car.json');
});
app.get('/C_beauty', function (req,res){
  res.sendFile(__dirname+'/data/3.json');
});
var server = app.listen('3002', function () {
  console.log(server.address().address, server.address().port);
})
