require("dotenv").config()
const express=require("express")
const app=express()
const path=require("path")
const PORT=process.env.PORT  || 4000
const bodyparser=require("body-parser")
const bodyParser = require("body-parser")

app.set("view engine","ejs")
app.use(express.static(path.join(__dirname,'public')))

app.get("/bmi",(req,res)=>{
    res.render("home")
})

app.use(bodyParser.urlencoded({extended:true}))

app.post("/calculate",(req,res)=>{
    const H=req.body.h
    const W=req.body.w
    const newH=H/100
    const bmi_result=W/(newH*newH)
    res.send(`<h1> THE BMI IS ${bmi_result}</h1>
        <p><a href="/bmi">GO BACK</a><p>
        `)
})


app.listen(PORT,(err)=>{
    if(!err)console.log(`${PORT} is running`)
})