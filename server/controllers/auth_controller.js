const swag = require('../models/swag.js')
const users = require('../models/users.js')
var id = 1;
module.exports = {

    login: (req, res, send) => {
        const { session } = req;
        const { username, password } = req.body;
        const user = users.find(user => user.username == username && user.password === password);

        if (user) {
            session.user.username = user.username;
            res.status(200).send(session.user);
        } else {
            console.log('something happened')
            res.status(500).send('Incorrect Username or Password')
        }
        console.log(session)
    },

    register: ( req, res, next ) => {
        const { session } = req;
        const { username, password } = req.body;
    
        users.push({ id, username, password });
        id++;
    
        session.user.username = username;
    
        res.status(200).send(session.user);
      },
    
    signout: (req, res, next) => {
        req.session.destroy()
        res.status(200).send(req.session)

    },
    getUser: (req, res, next) => {
        res.send(req.session.user)
    },


}