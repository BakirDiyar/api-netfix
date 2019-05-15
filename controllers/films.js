const cll = process.env.C_FILMS
const { ObjectId } = require('mongodb')
const { getDb } = require('../utils/database/database')

function getAllFilms (req, res){
    const db = getDb()

    db.collection(cll)
        .find()
        .toArray()
        .then( data => res.status(200).send({docs: data}))
        .catch( e => res.send({msg : e}))
}

function getFilmById(req, res){
    const db = getDb()
    let {id} = req.params
    
    db.collection(cll)
        .find({_id : ObjectId(id)})
        .toArray() 
        .then((data)=>{
            let doc = data[0]
            res.status(200).send(doc)
        })
        .catch( e => res.send({msg : e})) 
}

function insertFilm(req, res){
    const db = getDb()
    const {name, img} = req.body
    const doc = {name, img}

    db.collection(cll).insertOne(doc)
        .then(data => {
            res.status(200).send({doc: data.ops[0]})
        })
        .catch( e => res.send({msg : e}) )
}


function updateFilm(req, res){
    const db = getDb()
    const {_id, name, img} = req.body
    const doc = {name, img}

    db.collection(cll).updateOne({_id : ObjectId(_id)}, {$set: doc})
    .then((data)=>{
        res.status(200).send({doc: data})
    })
    .catch( e => res.send({msg : e}) )
}

module.exports={
    getAllFilms, insertFilm, getFilmById, updateFilm
}