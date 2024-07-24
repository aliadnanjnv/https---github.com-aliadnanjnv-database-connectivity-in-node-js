const mongoose = require("mongoose");

require("dotenv").config();

exports.connect = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(
            console.log("the database is conncected successfully")
        )
        .catch((error) => {
            console.log("the database is not conncected")
            console.error(error)
            process.exit(1);
        })
}