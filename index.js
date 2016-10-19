const express = require('express');
const fs = require('fs');
const request = require('request');
const exec = require('child_process').exec;
const app = express();
const PORT = 9000;
const env = require('node-env-file');
env(__dirname + '/.env');

var bodyParser = require('body-parser');
app.use(bodyParser());
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
  const access_token = process.env.access_token;
  var url = 'https://graph.facebook.com/me/feed';
  var params = {
   access_token: access_token,
   message: req.body.message,
  };
  request.post({url: url, qs: params}, function(err, resp, body) {
     if (err) {
      console.error(err)
      return;
     }
     res.redirect('/');
  });

})
app.listen(PORT,()=>{
  console.log('app statred');
  exec(`open http://localhost:${PORT}/`);
})
