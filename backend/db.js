// db.js
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/active_senior', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB !!!'))
.catch((err) => {console.error(err);});
