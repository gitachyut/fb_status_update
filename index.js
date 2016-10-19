const express = require('express');
const app = express();
var exec = require('child_process').exec;
const PORT = 9000;
app.use(express.static(__dirname+'/public'));
app.use('/',(req,res)=>{
  res.render('index.ejs');
})
app.listen(PORT,()=>{
  console.log('app statred');
  exec(`open http://localhost:${PORT}/`);
})
