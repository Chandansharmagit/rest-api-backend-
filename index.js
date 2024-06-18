const express = require("express");
const app = express();
const products_details = require('./routers/products');
const port = process.env.PORT || 9000;
const connectdb = require('./database/db');
const products_detailing = require('./database/models/products');

app.get("/", (req, res) => {
  res.send("hello welcome to ");
}); 
 
app.use('/api/products', products_details);

const startServer = async () => {
  try {
    await connectdb(); // Ensure database connection is established first
    app.listen(port, () => {
      console.log(`Server connected with ${port}`);
    });
  } catch (error) {
    console.error('Failed to start server', error);
  }
};

startServer(); // Start the server

