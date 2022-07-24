//Entry point server file
express = require('express');
mongoose = require('mongoose');
batchesRoutes = require('./routes/batchesRoutesNew.js');  //import batchesRoutes
var bodyParser = require('body-parser')

eobj = express();
eobj.use(bodyParser.urlencoded({extended : false}))
eobj.use(bodyParser.json());

eobj.use(batchesRoutes);  //Using batchesRoutes
 
eobj.listen(4000,(request,response)=>
{
  console.log("Marvellous Server is started successfully at port 4000");
});

eobj.get('/',(request,response)=>
{
  response.send("Welcome to Marvellous MEAN Application");
});

Databasepath = 'mongodb+srv://marvellous:marvellous@batches.r7s5nix.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(Databasepath).then(()=>
{
  console.log("Database connection is successful");
}).catch((err)=>
{
  console.log(err);
});

/*
app.post('/batches', (request, response) => {
    console.log(request.body);
    //response.send(request.body);
});
*/


