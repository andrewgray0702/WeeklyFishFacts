const pool = require('../connections').pool;
const bcrypt = require('bcrypt');

function create(req, res){
    pool.query("SELECT * FROM USER WHERE email = ?", 
    [req.body.email], (err, queryReturn)=>{
        if(queryReturn[0]){
            return res.send("USERNAME ALREADY EXISTS")
        }
        let password = bcrypt.hashSync(req.body.password, 5);
        let email = req.body.email;
        pool.query("INSERT INTO USER (username, password) VALUES(?,?)", [email, password], (err, result)=>{
            if(!err){
                return res.send("Signed Up!");
            }
            console.log(err);
            res.status(500).send({error: "SOMETHING BROKE"})
        })
    })    
}


function login(req, res){
    pool.query('SELECT * FROM WHERE email = ?', [req.body.email], (err, result) => {
        if(result){
            if(bcrypt.compareSync(req.body.password, result[0].password)){
                return res.send({message: "Welcome Back!"})
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