 const express=require("express")
 const users=express.Router();
 const cors=require("cors12344")
const jwt=require("jsonwebtoken");

const multer =require("multer")
const path =require("path")
const User=require("../models/User")
const Admin=require("../models/Admin")
users.use(cors());

users.use(express.static("photos"));	
process.env.SECRET_KEY='secret'




users.post('/sub',(req,res)=>{
	var phoname=[];
	var photname="";
	var i=0;
const storage1=multer.diskStorage(
{destination:"./photos",
 filename:function(req,file,cb){
    
    photname=file.fieldname+'-'+Date.now()+path.extname(file.originalname)+i;
    phoname.push('https://git.heroku.com/secret-badlands-38102.git/'+photname);
 	cb(null,photname)
 	 console.log("hello")
 	i++;
  }


}
)
console.log(phoname)
const upload=multer({storage:storage1}).array('file',4);
upload(req,res,(err)=>{if(err){} else{console.log(req.body.pname);const objData={pname:req.body.pname,pcat:req.body.pcat,price:req.body.price,photoname:phoname}
Admin.create(objData).then(admin=>{res.json(admin); }).catch(err=>{res.send("error"+err)})} })
console.log("done")
console.log(phoname)


})




users.post('/register',(req,res)=>{

const userData={
first_name:req.body.first_name,
last_name:req.body.last_name,
password:req.body.password,
email:req.body.email
}
User.findOne({
email:req.body.email

}).then(users=>{
if(!users){
var hash=req.body.password;
	userData.password=hash
	User.create(userData)
	.then(users=>{
		res.json({status:users.email+' registered'})
	}).catch(err=>{res.send("error")})


}
else
	{res.json({error:"user already exist"})}



}).catch(err=>{res.send("error"+err)})

})










users.post('/search',(req,res)=>{


let a=req.body.value

Admin.find({$or: [
{pname:{$regex:new RegExp(a)}},
{pcat:{$regex:new RegExp(a)}}
]}
	).then(admindbs=>{
		if(admindbs)
	 {console.log(admindbs)
	 	res.json(admindbs)
	 }
 	else
     res.send("")
} ).catch(err=>{res.send("error")})


})





users.post('/addcart',(req,res)=>{


var a=req.body.cemail
var b=req.body.product
var c=[];
User.find({email:a}).then(users=>{c=users[0].cart;;c.push(b);}).then(users1=>{User.updateOne(
{email:a},{$set :{cart:c}}
	).then(users=>{
		if(users)
	 {
	 	console.log(c)
	 	res.json(users)

	 }
 	else
     res.send("sadsd")
} ).catch(err=>{res.send("error")})})



})







users.post('/remove',(req,res)=>{
let a=req.body.username
let c=req.body.remove
var b=[];
var index=-1;
User.find({email:a}).then(users=>{
	if(users){
console.log(users[0].cart)
b=users[0].cart;
for(i=0;i<b.length;i++){
if(c==b[i])
{
index=i;
break;
}
}
if(index!=-1){
b.splice(index,1);


}
}
}).then(user1=>{User.updateOne(
{email:a},{$set :{cart:b}}
	).then(users=>{
		if(users)
	 {
	 	console.log(c)
	 	res.json(users)

	 }
 	else
     res.send("error")
} ).catch(err=>{res.send("error")})})




})



users.post('/dress',(req,res)=>{


let a=req.body.dress

Admin.find({pcat:a}

	).then(admindbs=>{
		if(admindbs)
	 {
	 	res.json(admindbs)
	 	console.log(admindbs)
	 }
 	else
     res.send("")
} ).catch(err=>{res.send("error")})


})


users.post('/carousel',(req,res)=>{




Admin.find(

	).then(admindbs=>{
		if(admindbs)
	 {
	 	res.json(admindbs)
	 	console.log(admindbs)
	 }
 	else
     res.send("")
} ).catch(err=>{res.send("error")})


})





users.post('/product',(req,res)=>{


let a=req.body.product

Admin.find({pname:a}

	).then(admindbs=>{
		if(admindbs)
	 {
	 	res.json(admindbs)
	 }
 	else
     res.send("")
} ).catch(err=>{res.send("error")})







})




users.post('/productcheck',(req,res)=>{
let b=req.body.cemail

User.find({email:b}

	).then(users=>{
		if(users)
	 {
	 	res.json(users)
	 }
 	else
     res.send("")
} ).catch(err=>{res.send("error")})

})







users.post('/signin',(req,res)=>{


User.findOne({email:req.body.email}).then(users=>{
if(users){
if(req.body.password==users.password)
{
const obj={
	_id:users._id,
email:users.email,
first_name:users.first_name,
last_name:users.last_name
}

let token=jwt.sign(obj,process.env.SECRET_KEY,{expiresIn:1440})
res.send(token)
}
else
res.json({val:"no user exist"})
}
else
res.json({val:"no user exist"})
}
).catch()


})
users.post('/profile',(req,res)=>{

var decoded=jwt.verify(req.headers['authorization'],process.env.SECRET_KEY)
User.findOne({_id:decoded._id}).then(user=>{
if(user)
{
res.json(user)

}
else
	res.send("no user")


}).catch(err=>{res.send("error")})

})







module.exports=users;
