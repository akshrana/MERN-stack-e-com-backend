const mongoose=require("mongoose");
const Schema =mongoose.Schema

const userSchema=new Schema({
first_name:{

type:String
},
last_name:{
type:String
},
password:{
type:String
},
email:{
type:String
},
cart:{
	type:Array
}

})
module.exports=User=mongoose.model('users',userSchema);