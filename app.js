const express =require("express");
const cors = require('cors');
const inventoryRoutes = require("./routes/Inventory");
const app = express();
const PORT = 5000;

app.use(cors());
app.use(inventoryRoutes);
app.listen(PORT , () => {
    console.log(`App running on ${PORT}`)
})