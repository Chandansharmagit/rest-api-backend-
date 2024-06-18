const connectdb = require('./database/db');
const products_detailing = require('./database/models/products');
const productjson = require('./products.json');

const start = async () => {
    try {
        await connectdb('mongodb+srv://chandansharma575757:CPCCMb4FK2jTKWFQ@cluster0.qkm80jw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
        await products_detailing.deleteMany();
        await products_detailing.create(productjson);
        console.log("data connected");
    } catch (error) { 
        console.log(error);
    }
};

start(); 
 