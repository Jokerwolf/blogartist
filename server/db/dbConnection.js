/**
 * User: EGordina
 * Date: 17.02.16
 * Time: 14:07
 */
var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'j1803poimd10li',
    database : 'blogartist'
});

module.exports = connection;
