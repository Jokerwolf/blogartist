/**
 * User: EGordina
 * Date: 08.02.16
 * Time: 14:01
 */

var express = require('express');
var path = require('path');
var app = express();

app.use("/assets",  express.static(path.join(__dirname, '../assets')));
app.use("/app",  express.static(path.join(__dirname, '../app')));
app.listen(8081);

app.get('/', function(request, response){
    response.sendFile(path.join(__dirname, '../', 'index.html'));
});

app.get('/api/posts', function(request, response){
    var posts = [{id: 0, title: 'My first post', postDate: '2016-01-25T15:00:07'},
        {id: 1, title: 'My second post', postDate: '2016-02-03T10:24:15'}];
    response.json(posts);
});