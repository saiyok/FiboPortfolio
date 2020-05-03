const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 5000; 
const app = express();
// app.use(express.static(__dirname + 'public'));
app.listen(PORT);
const db = require('../server/db/Connection');
const cors = require('cors');
const whitelist = ['http://localhost:3000', 'http://localhost:3306'];
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}
console.log("111111");
const {getTime, cookieValidator} = require('./routes/TestMiddleware');
app.get('/', (req, res) => {
    res.send({working: true})
})

app.get('/A', [cors(corsOptions),getTime], (req, res) => {
    // console.log(req);
    res.json([
        {
            'id': 1,
            'word': 'ant',
            'time': req.requestTime
        },
        {
            'id': 2,
            'word': 'bee',
            'time': req.requestTime
        },
        {
            'id': 3,
            'word': 'cat',
            'time': req.requestTime
        },
        {
            'id': 4,
            'word': 'dog',
            'time': req.requestTime
        }
    ]);
});

app.get('/hi_db', (req, res) => {
    let sql = `SELECT * FROM non.users`;
    db.query(sql, (err, result) => {
        if (err) {throw err}
        res.json(result);
    });
});

// connection.connect(function(err) {
//     if (err) {
//       console.error('error connecting: ' + err.stack);
//       return;
//     }
   
//     console.log('connected as id ' + connection.threadId);
//   });

//   connection.query('SELECT * FROM non.users', function(err,rows,fields){
//       if(!err){
//           console.log('NON:', rows);
//       }else{
//           console.log('Error na krub')
//       }
//   })
