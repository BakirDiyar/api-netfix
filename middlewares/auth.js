const jwt = require('jsonwebtoken')

function verify (req, res, next){
    let hd = req.get('Authorization')
    console.log(hd);
    next()

    // let token = hd.split(' ')[1].trim()
    // if (token) {
    //     jwt.verify(token, process.env.SECRET, (err, decoded) => {
    //         if (err) {
    //             return res.json({
    //             success: false,
    //             message: 'Token is not valid'
    //             });
    //         } else {
    //             req.decoded = decoded;
    //             next();
    //         }
    //     });
    // }
    // else {
    //     return res.json({
    //         success: false,
    //         message: 'Auth token is not supplied'
    //     });
    // }    
}

module.exports = {verify}