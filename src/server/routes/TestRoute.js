const express = require('express');
const router = express.Router();
const dbQuery = require('../db/Query');

router.get('/:table/:id', (req, res) =>{
    const { table, id } = req.params;
    dbQuery.executeQuery(dbQuery.insertRow(table,req.body.data),function(err,rows){
        if(!err){
            console.log(id);
            res.send(rows);
        }else{
            console.log(err);
        }
    });
})

router.get('/view/:table/:id', (req, res) => {
    const { table, id } = req.params;
    dbQuery.executeQuery(dbQuery.selectRow(table,req.body.data),function(err,rows){
        if(!err){
            console.log(id);
            res.send(rows);
        }else{
            console.log(err);
        }
    });
})