const express = require("express")
const cors = require("cors")
const nodemailer = require("nodemailer")

const app = express()
const PORT = 5000
// Middleware
app.use(express.json())
app.use(cors())

app.get("/api",function(req,res){
    res.status(200).send("Welcome to Backend API")
})

app.post("/contact",async function(req,res){
    const {name,phoneNumber,email,msg} = req.body
    const transport = nodemailer.createTransport({
        service:"gmail",
        auth:{
            user:"jovin1261999@gmail.com",
            pass:"kjkm neqo qxgu csvq"
        }
    })
    const message = `
    Name: ${name} \n 
    Phone No: ${phoneNumber} \n 
    Email Id: ${email} \n

    Message: ${msg}
    `
    try{
        transport.sendMail(
            {
                from:'jovin1261999@gmail.com',
                to:"jovin.roshan.dev@gmail.com",
                subject:"Mail From MyPortfolio",
                text:message
            }
        )
        res.send(true)
    } catch(error){
        res.send(false)

    }
    
})

app.listen(PORT,function(){
    console.log("Backend Server Started",PORT)
})