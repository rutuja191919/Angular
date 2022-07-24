mongoose = require('mongoose');
//Firstly schema of database gets designed
//create table batches(name varchar(255),duration int);
batchesSchema = new mongoose.Schema({
name : {
type : String,
},
duration : {
type : Number,
}
});

batches = mongoose.model("batches",batchesSchema);

module.exports = batches;
