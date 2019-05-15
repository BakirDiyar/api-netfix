const cll = process.env.C_USERS
const { getDb } = require('../utils/database/database')
const jwt = require('jsonwebtoken')
let token

function  signin (req, res){
    const db = getDb()
    const {email, password} = req.body

    db.collection(cll).findOne({email: email})
    .then(user=>{
        // console.log(user);
        if(user){
            if(user.password === password){
                let data = {name : user.name, email: user.email}
                token = jwt.sign({client: data }, process.env.SECRET)
                res.status(201).json({ok:'true', msg:'user ok', token})
            }
            else{
                res.status(401).json({ok:'false', msg:'bad credentials'})
            }
        }else{
            res.status(401).json({ok:'false', msg:'the user not exist at system'})
        }
    })
    .catch(err=> res.status(500).json({ok:'false', msg:err}))

}

function insertUsers(req, res){
    const db = getDb()
    const {name, email, password} = req.body
    const doc = {name, email, password}
    console.log(doc);
    db.collection(cll).insertOne(doc)
        .then(data => {
            res.status(200).send({msg:'user created', doc: data.ops[0]})
        })
        .catch( e => res.send({msg : e} ))
}


module.exports={
    signin,  insertUsers
}