const mongoose=require("mongoose");
const Schema =mongoose.Schema

const userSchema=new Schema({
pname:{

type:String
},
pcat:{
type:String
},
photoname:{
type:Array
},
review:{
	type:Number
},
price:{
	type:Number
}

})
module.exports=Admin=mongoose.model('admindb',userSchema);