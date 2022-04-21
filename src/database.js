import mongoose from "mongoose";

mongoose.connect("mongodb://host.docker.internal:27017/companydb", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(db => console.log('Db is connected'))
.catch(err => console.log(err))