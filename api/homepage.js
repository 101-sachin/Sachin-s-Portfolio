const express =require('express')
const db= require("../dbconfig/dbconfig")
const app= express()

app.get('/', async (req,res)=>{
    try {
        const [social]= await db.query("SELECT name,title,intro,social_media FROM profile")
        res.status(200).json(social)
    } catch (error) {   
        res.status(404).json({error :'Data Not fetch'})
    }
})

module.exports = app
