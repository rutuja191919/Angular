express = require('express'); 

batchesModel = require('../models/batches.js');//import kela schema
//var bodyParser = require('body-parser')

eobj = express(); //express cha object tayar kela

//Read the data from database

//eobj.use(bodyParser.urlencoded({extended : false}))   //body parser is not necessary here as I already encoded request in JSON format
//eobj.use(bodyParser.json());

//Promise concept with async and await
eobj.get('/batches',async(request,response)=>
{
batches = await batchesModel.find({});  //select * from ____
try
{
  response.send(batches);
}
catch(error)
{
  response.status(500).send(error);
}
});

//Insert data into database
eobj.post('/batches',async(request,response)=>{
batches = new batchesModel(request.body);
console.log(request.body);
try
{
  await batches.save();  //insert into batches values("PPA",3);
  response.send(batches);
}
catch(error)
{
  response.status(500).send(error);
}
});

eobj.delete('/batches/:id',async(request,response)=>{
  try
  {
    batches = await batchesModel.findByIdAndDelete(request.params.id);
    if(!batches)
    {
      response.status(404).send("There is no such batch");
    }
  }
  catch(error)
  {
    response.status(500).send(error);
  }
})

eobj.get('/batches/:id',async(request,response)=>
{
batches = await batchesModel.findById(request.params.id);  
console.log(batches);
try
{
  response.send(batches);
}
catch(error)
{
  response.status(500).send(error);
}
});

eobj.patch('/batches/:id',async(request,response)=>{   //ekach entry edit karta yete
  try
  {
    await batchesModel.findByIdAndUpdate(request.params.id,request.body);
    await batchesModel.save();
  }
  catch(err)
  {
    response.status(500).send("Failure in update");
  }
  })   

module.exports = eobj;  //Export karta yete module : module : normal js file 



//CRUD application

//C -> Create
//Endpoint : post
//Mongodb function : save()
//create table 

//R->Read
//Endpoint : get
//Mongodb function : find()
//select * from

//U->Update
//Endpoint : patch(partial update)/put(whole update)
//Mongodb function : findByIdAndUpdate
//Update tablename set duration = ____ where id = _____;

//D->Delete
//Endpoint : delete
//Mongodb function : findByIdAndDelete
//delete from tablename where id = _____;