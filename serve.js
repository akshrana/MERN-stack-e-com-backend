const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
const app=express();
const mongoose=require("mongoose");

console.log("starting node server")
app.use(bodyParser.json())

app.use(cors())
app.use(bodyParser.urlencoded(
{extended: false}


	))


	

const mongoURI="mongodb+srv://user:akshaksh123@cluster0-e6suv.mongodb.net/test?retryWrites=true&w=majority"
const mongoURI2="mongodb://localhost:27017/files"
const Users=require("./route/User.js")

app.use('/users',Users)
app.get('/',(req,res)=>{

res.send("hello")

})
mongoose.connect(mongoURI,{useNewUrlParser:true})
.then(()=>{console.log("mongodb conected") })
.catch(err => console.log(err));

 app.listen(process.env.PORT||3001);
 