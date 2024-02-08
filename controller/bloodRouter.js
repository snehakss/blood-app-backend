const express=require("express")
const bloodModel=require("../model/bloodModel")

const router=express.Router()

router.post("/add",async(req,res)=>{
    let data=req.body
    let bloodss=new bloodModel(data)
    let result=await bloodss.save()
    res.json({
        status:"success"
    })
})

module.exports=router