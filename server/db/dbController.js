/**
 * User: EGordina
 * Date: 16.02.16
 * Time: 20:51
 */
var connection = require('./dbConnection.js');

/*** Prepare statements ***/
var preparedStatements = {};
preparedStatements['getPosts'] = "SELECT * FROM posts";
/*** Prepare statements end ***/
var dbController = function(){
    var self = this;

    self.open = function(){
        connection.connect();
    };
    self.end = function(){
        connection.end();
    };

    self.callStatement = function(name, callback){
        connection.query(preparedStatements[name], function(err, rows, fields) {
            if (!err){
                callback(rows);
            } else {
                console.log('Error while performing Query.');
            }
        });
    };
};

module.exports = dbController;