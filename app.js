const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")

const bloodRoute=require("./controller/bloodRouter")

const app=express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://snehaks:Snehaks2000@cluster0.rauhjed.mongodb.net/bloodDb?retryWrites=true&w=majority",
{useNewUrlParser:true}
)

app.use("/api/blood",bloodRoute)

app.listen(3001,async(req,res)=>{
    console.log("server running")
})