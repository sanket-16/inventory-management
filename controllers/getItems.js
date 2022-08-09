const Item = require('../models/Item');

async function getItems(req, res) {
  const items = await Item.find({});
  res.send(items);
}

module.exports = getItems;
