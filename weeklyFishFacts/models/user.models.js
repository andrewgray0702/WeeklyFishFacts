const pool = require('../connections').pool;
const bcrypt = require('bcrypt');

function create(req, res){
    pool.query("SELECT * FROM USER WHERE email = ?", 
    [req.body.email], (err, queryReturn)=>{
        console.log(err);
        if(queryReturn[0]){
            return res.send("USERNAME ALREADY EXISTS")
        }
        let password = bcrypt.hashSync(req.body.password, 5);
        let email = req.body.email;
        pool.query("INSERT INTO USER (email, password) VALUES(?,?)", [email, password], (err, result)=>{
            if(!err){
                console.log(result);
                return res.send({user: {email: req.body.email, id: result.insertId}});
            }
            console.log(err);
            res.status(500).send({error: "SOMETHING BROKE"})
        })
    })    
}


function login(req, res){
    pool.query('SELECT * FROM USER WHERE email = ?', [req.body.email], (err, result) =>{ 
    console.log(result, req.body)
        if(result[0]){
            if(bcrypt.compareSync(req.body.password, result[0].password)){
                return res.send(result)
            } else {
                return res.send({error: "Invalid Username or Password"});
            }
        }
        res.send({error: "Invalid Username or Password"})
    })
}

function deleteUser(req, res){
    pool.query("DELETE FROM USER WHERE email = ?",
    [req.body.email], (err, queryResult)=>{
        if(queryResult){
            return res.send("Account deleted.")
        } else {
            res.status(500).send("OOPS! SOMETHING WENT WRONG")
        }
    })
}

module.exports.create = create;
module.exports.login = login;
module.exports.deleteUser = deleteUser;