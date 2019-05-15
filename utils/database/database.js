const MongoClient = require('mongodb').MongoClient;

 let _db 

function mongoConnect (cb){
   MongoClient.connect(process.env.URLDB, {useNewUrlParser:true})
    .then((client)=>{
        _db = client.db('posterFilms')
        cb()
    }).catch(e=>{
        console.log('error : ', e);
    }) 
}

function getDb (){
    if(_db) return _db;
    console.log('error database not found')
}

module.exports={
    mongoConnect,
    getDb
}
