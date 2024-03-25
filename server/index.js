const express=require("express");
const Razorpay=require("razorpay");
require("dotenv").config();
const cors=require("cors");

const app = express();
const PORT=process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());

app.post("/order",async (req,res)=>{

    try{
    const razorpay=new Razorpay({
        key_id: process.env.RAZORPAY_KEY_ID,
        key_secret: process.env.RAZORPAY_SECRET,
    });
    const options=req.body;
    const order=await razorpay.orders.create(options);
    if(!order){
        return res.status(500).send("Error");
    }
    res.json(order);
}
catch(err){
    console.log(err);
    res.status(500).json("error");
}

})
app.listen(PORT,()=>{
    console.log("Listening to the port",PORT);
})