const mongoose = require('mongoose');

const connectdb = async () => {
    try {
        await mongoose.connect('mongodb+srv://chandansharma575757:CPCCMb4FK2jTKWFQ@cluster0.qkm80jw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
        });
        console.log('Database connected successfully');
    } catch (error) {
        console.error('Database connection failed', error);
        process.exit(1);
    }  
};

module.exports = connectdb;
 