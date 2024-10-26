const mongoose=require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/firstmongodb')

const userSchema=mongoose.Schema({
    name:String,
    username:String,
    email:String
})

//Create model to perform CRUD operations
module.exports=mongoose.model("user",userSchema)          //Model named users(pluralized) will be created and exported
