const path=require('path');
const express=require('express');
const bodyParser=require('body-parser');

const app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));;

app.use(express.static(path.join(__dirname, 'public')));

const routes=require('./controller/logic');


app.use("/.netlify/functions/api",routes);


module.exports=app;

