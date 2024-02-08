const mongoose=require("mongoose")

const bloodSchema=mongoose.Schema(
    {
        name:String,
        age:String
    }
)

module.exports=mongoose.model("bloods",bloodSchema)