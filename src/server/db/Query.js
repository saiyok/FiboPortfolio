import mysql from 'mysql';

let db = require('./db/Connection');

module.exports.executeQuery = function(query, callback){
    db.getConnection(function(err, connection){
        if (err) {
            return callback(err, null);
        }
        else if (connection){
            connection.query(query, function(err, rows, fields){
                connection.release();
                if(err){
                    return callback(err, null);
                }
                return callback(null, rows);
            })
        }
        else{
            return callback(true, "no connection");
        }
    });
};

module.exports.insertRow = function (table, data){
    let insertQuery = 'INSERT INTO ?? SET ?';
    let query = mysql.format(insertQuery, [table, data]);
    return query;
};

module.exports.selectRow = function(table, data){
    let selectQuery = 'SELECT * FROM ?? WHERE ?? = ?';
    let query = mysql.format(selectQuery, [table, data[0], data[1]]);
    return query;
};

module.exports.updateRow = function(table, data){
    let updateQuery = 'UPDATE ?? SET ?? = ? WHERE ?? = ?';
    let query = mysql.format(updateQuery, [table, data[0], data[1], data[2], data[3]]);
    return query;
};

module.exports.deleteRow = function(table, data){
    let deleteQuery = 'DELETE from ?? where ?? = ?';
    let query = mysql.format(deleteQuery, [table, data[0], data[1]]);
    return query;
};