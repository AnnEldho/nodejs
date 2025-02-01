const mongoose= require('mongoose');
const { create } = require('./user');
var scholarshipSchema= new mongoose.Schema({
	scholarship_name:{
		type:String,
		required:true,
		minlength:3,
		maxlength:30
	},
	description:{
		type: String,
		required:true,
		
	},
	amount:{
		type:Number,
		required:true,
	},
	user_id:{
		type:mongoose.Schema.Types.ObjectId,
		required:true
	},
	opening_date:{
		type:Date,
		required:true
	},
	closing_date:{
		type:Date,
		required:true
	},
	status:{
		type:String,
		default:"Open"
	},
	datetime:{
		type:Date,
		default:Date.now
	}
})
module.exports= mongoose.model('Scholarship',scholarshipSchema);