const express = require('express');
const app = express();
const Port = 3000;

app.get('/health', (req,res) => {
    res.json({
        status:"ok",
        timestamp:new Date().toISOString()
    });
});

app.get('/products', (req, res) => {
    const products = [
       {id:1, name: "Then little prince", price: 20, category: "books"},
       {id:2, name: "Harry Potter", price: 30, category: "books"},
       {id:3, name: "little red riding hood", price: 15, category:"books"} 
    ];
    res.json(products);
    
});


app.listen(Port, () => {
    console.log(`server running on port ${Port}`)
});