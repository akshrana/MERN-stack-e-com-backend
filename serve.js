const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
const app=express();
const mongoose=require("mongoose");
const path =require("path")

console.log("starting node server")
app.use(bodyParser.json())

app.use(cors())
app.use(bodyParser.urlencoded(
{extended: false}


	))
	console.log(__dirname)

app.use(express.static("client/build"));
app.use(express.static("client/build1"));
app.use('/static', express.static(path.join(__dirname, 'client/build1')))	

app.use(express.static("photos"));	
const mongoURI="mongodb+srv://user:akshaksh123@cluster0-e6suv.mongodb.net/test?retryWrites=true&w=majority"
const mongoURI2="mongodb://localhost:27017/files"
const Users=require("./route/User.js")
console.log( "/////"+path.join(__dirname, '/client/build/index.html'))
app.use('/',Users)


app.get('/*',Users,(req,res)=>{
	console.log(__dirname)
    res.sendFile(   path.join(__dirname, '/client/build/index.html') ) 
})


mongoose.connect(mongoURI,{useNewUrlParser:true})
.then(()=>{console.log("mongodb conected") })
.catch(err => console.log(err));

 app.listen(process.env.PORT||3001);
 