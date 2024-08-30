const mongoose = require('mongoose');

const Link = process.env.DBLink;

if (!Link) {
    console.error("DBLink environment variable is not defined");
    throw new Error("DBLink environment variable is not defined");
}

const ConnectDB = async () => {
    try {
        await mongoose.connect(Link, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to the database successfully!');
    } catch (error) {
        console.error("Error connecting to the database:", error);
    }
};

module.exports = ConnectDB;
