const express = require('express');
const fs = require('fs');
const exec = require('child_process').exec;
const app = express();
const PORT = 9000;
const env = require('node-env-file');
env(__dirname + '/.env');

app.use(express.static(__dirname+'/public'));

app.get('/',(req,res)=>{
  var access_token = process.env.access_token;
  if(access_token){
    access_token = true;
  }else{
    access_token = false;
  }
  res.render('index.ejs',{access_token});
});
app.post('/fb_status_update',(req,res)=>{
  console.log(req);
})
app.listen(PORT,()=>{
  console.log('app statred');
  // exec(`open http://localhost:${PORT}/`);
})
