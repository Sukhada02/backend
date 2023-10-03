const mongoose = require("mongoose");

const connectionDB = async () => {
    try {
        const conn = await mongoose.connect("mongodb+srv://sukhadainamdar02:sukhada@cluster0.ivlgfk6.mongodb.net/todo",{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        
        console.log(" mongoDB connected ", conn.connection.host);

    } catch (error) {
        
        console.log(" mongoDB connection error ", error.message);
        process.exit();

    }
}

module.exports = connectionDB