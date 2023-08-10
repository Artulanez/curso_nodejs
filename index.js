const { Person } = require("./person");
const dotenv = require("dotenv");
const connectToDatabase = require("./src/database/connect");
require("./modules/express")

dotenv.config();

connectToDatabase();

// require('./modules/path')
// require("./modules/fs");
// require("./modules/http")




// const person = new Person("Artulanez");

// console.log(person.sayMyName()); 