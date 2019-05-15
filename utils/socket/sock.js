
function sockApp(io){
    io.on('connection', client=>{
        console.log('conction ok');
    })
}

module.exports = {sockApp}