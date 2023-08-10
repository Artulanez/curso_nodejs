const mongoose = require("mongoose");

const connectToDatabase = async () => {
    await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cursonodejs.2kww50y.mongodb.net/database?retryWrites=true&w=majority`)
    .catch(  (Error) => { return console.log(" Erro :",error)} );

    return console.log("Connectou!")
}

module.exports = connectToDatabase;