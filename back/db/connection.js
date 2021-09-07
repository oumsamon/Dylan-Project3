const mongoose = require('mongoose');

const mongoURI =  'mongodb+srv://admin:Project3@cluster0.yr9zs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(instance => console.log(`Connected to DB: ${instance.connection.name}`))
.catch(error => console.log(`Connection failed`, error))

module.exports = mongoose;