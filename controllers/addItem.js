const Item = require('../models/Item');

async function addItem(req, res) {
    const name= req.body.name;
    const cost = req.body.cost;
    const stock = req.body.stock;
    
    const newItem = new Item({
        name: name,
        cost: cost,
        stock: stock
    })
    await newItem.save()
    res.json({message:'successfull'})

}

module.exports = addItem;
