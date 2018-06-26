const swag = require('../models/swag')
module.exports ={
    search: function(req,res){
        const {category} = req.query
        if(!category){
            res.send(swag).status(200)
        }else{
            let filteredSwag = swag.filter(swag => swag.category === category)
            res.status(200).send(filteredSwag)

        }
    }
}