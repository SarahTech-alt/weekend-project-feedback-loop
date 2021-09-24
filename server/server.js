const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const pool = require('./modules/pool');
const PORT = process.env.PORT || 5000;

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/


app.post( '/feedback', (req,res) =>{
    console.log(req.body);
    
const newFeedback = req.body;
const queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
VALUES (4, 4, 5, 'Doing Great!');`
pool.query(queryText).then(result => {
    res.sendStatus(201);
}).catch(error => {
    console.log('There was an error making request', error);
    
    res.sendStatus(500);
});
})


   
/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
});