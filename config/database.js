var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/nodejs_basic", { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
