const Item = require('../models/Item');

async function deleteItem(req, res) {
    const id = req.body.id;
  Item.findByIdAndRemove(id)
  .then(
    res.json({message:"Successfully deleted"})
  )
}

module.exports = deleteItem;
