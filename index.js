require("dotenv").config();
const mongoose=require("mongoose");
const express=require('express')
const app=express()
const bodyParser=require("body-parser");
const cookieParser=require('cookie-parser');
const cors=require('cors');
const port=3000;
const userRoutes=require('./routes/user-routes');
const scholarshipRoutes=require('./routes/scholarship-routes');

//DB Connection
mongoose
.connect(process.env.DATABASE,{
	useNewUrlParser:true,
	useUnifiedTopology:true
}).then(()=>{
	console.log("DB CONNECTED");
});

//Middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

app.use('/api',userRoutes);
app.use('/api',scholarshipRoutes);

app.get('/',(req,res)=> {
	res.send('Hello World')
})

app.get('/login',(req,res)=>{
	res.send('Login Successful')
})

app.listen(port,() => {
	console.log(`App listening on port ${port}`);
})