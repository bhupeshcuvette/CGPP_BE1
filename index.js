const express=require('express');
const foodData = require('./foodInfo.js');
const app=express();

const port = 3000;


let timeNow= new Date().toLocaleString();

app.get("/health-api",(req,res)=>{
    res.json({time:timeNow,app:"express-server",status:"active"});
})

app.get("/all",(req,res)=>{
    res.send(foodData);
})

app.get("/vegetable",(req,res)=>{
    let allVegetables=foodData.filter((item)=>{
        return item.category==="Vegetable";
    })
    res.send(allVegetables);
})

app.get("/fruit",(req,res)=>{
    let allFruits = foodData.filter((item)=>{
        return item.category==="Fruit";
    })
    res.send(allFruits);
})

app.get("/protein",(req,res)=>{
    let allProtein = foodData.filter((item)=>{
        return item.category==="Protein";
    })
    res.send(allProtein);
})

app.get("/calorie-above-100",(req,res)=>{
    let calorieAbove100 = foodData.filter((item)=>{
        return item.calorie>100;
    })
    res.send(calorieAbove100);
})

app.get("/calorie-below-100",(req,res)=>{
    let calorieBelow100 = foodData.filter((item)=>{
        return item.calorie < 100;
    })
    res.send(calorieBelow100);
})

app.listen(port,()=>{
    console.log('listening');
})