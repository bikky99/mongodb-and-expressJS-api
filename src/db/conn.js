const mongoose = require('mongoose');

mongoose.set('strictQuery', true)

mongoose.connect('mongodb://localhost:27017/olymics', {
    // useCreateIndex: true,
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
}).then(()=>{
    console.log('Connected');
}).catch((e) => {
    console.log(e);
})