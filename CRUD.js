const express=require('express')
const app=express()

const userModel=require('./usermodel')

app.get('/',(req,res)=>{   
    res.send("Mongo DB!")
})

//Create
app.get('/create',async (req,res)=>{
    //any code related to mongoose (CRUD) will always be asynchronus
    let createdUser=await userModel.create({
        name:"Usman",
        username:"usmanarshad",
        email:"usman@gmail.com",
    })
    res.send(createdUser);
})

//Read
app.get('/read',async (req,res)=>{
    //any code related to mongoose (CRUD) will always be asynchronus
    let users= await userModel.find(); //It will give all users
    // let users= await userModel.find({username:"usmanarshad"}); //find gives array (gives null array if user doesn't exist)
    // let users= await userModel.findOne({username:"usmanarshad"}); //findOne gives object (gives nothing if user doesn't exist)
    res.send(users);
})

//Update
app.get('/update',async (req,res)=>{
    //any code related to mongoose (CRUD) will always be asynchronus
    let updatedUser= await userModel.findOneAndUpdate({username:"usamarazzaq"}, {name:"Usama Razzaq"}, {new:true})
    res.send(updatedUser);
})

//Delete
app.get('/delete',async (req,res)=>{
    //any code related to mongoose (CRUD) will always be asynchronus
    let deletedUser= await userModel.findOneAndDelete({username:"usamarazzaq"})
    res.send(deletedUser);
})

app.listen(3000)