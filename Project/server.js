const express = require('express');
const app = express();
const mongoose = require ('mongoose');
const NameModel = require('./model');
app.use(express.json());

mongoose.connect('mongodb+srv://Pradeep:Shailaja_96@cluster0.zpk44.mongodb.net/?retryWrites=true&w=majority').then(
    ()=> console.log('Db connected')
    ).catch(err => console.log(err))


app.get('/products', async(req,res)=>{
    const dbResults = await NameModel.find()
    res.json(dbResults)
    })

app.get('/products/:id', (req,res)=>{
    const newData = products.filter(item => item.id == req.params.id)
    return res.json(newData);
})

app.post('/addproducts',async (req,res)=>{
    console.log({body: req.body});
    const {id ,name}= req.body;
    try{
        const newData = new NameModel({id: id, name: name});
        await newData.save();
        return res.send(newData)
    
    }
    catch(err){
        console.log(err.message);
    }
    console.log(id,name);
    return res.send("Data Stored")
})
app.listen(5000,()=> console.log('server running'));



