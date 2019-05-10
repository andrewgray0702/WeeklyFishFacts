const pool = require('../connections').pool;

function suggest(req, res){
    pool.query('INSERT INTO facts (fact, userID) VALUES (?, ?)', [req.body.fact, req.body.userID], (err, result)=>{
        console.log(err);
        
        if(!err){
            return res.send('Suggestion added')
        }
        res.status('500').send({error: "SOMETHING WENT WRONG"})
    })
}

module.exports.suggest = suggest;