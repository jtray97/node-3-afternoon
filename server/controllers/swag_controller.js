const swag = require('../models/swag')
module.exports = {
    read:function(req,res,next){
        res.send(swag).status(200)
    }
}