
// mongodb://127.0.0.1:27017/?compressors=disabled&gssapiServiceName=mongodb


const mongoose = require('mongoose');

 const host = 'localhost';
 const port = 27017;
 const name = 'moviesdb';
 const connectionString = `mongodb://${host}:${port}/${name}`;
// const connectionString = `mongodb://127.0.0.1:27017/gssapiServiceName=moviesdb`

const connectDB = async () => {
    try{
        // mongodb connection string
        const con = await mongoose.connect(connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        })
        console.log(`MongoDB connected : ${con.connection.host}`);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}
module.exports = connectDB;