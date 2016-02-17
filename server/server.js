/**
 * User: EGordina
 * Date: 08.02.16
 * Time: 14:01
 */

var express = require('express');
var path = require('path');
var dbControllerModule = require('./db/dbController.js');
var app = express();
var dbController = new dbControllerModule();


app.use("/",  express.static(path.join(__dirname, '../app')));
app.use("/assets",  express.static(path.join(__dirname, '../app/assets')));
app.use("/components",  express.static(path.join(__dirname, '../app/components')));
app.use("/images", express.static(path.join(__dirname, '../app/assets/images')));
app.listen(8081);

app.get('/api/posts', function(request, response){
    var posts = [];
    dbController.callStatement('getPosts', function(rows){
        for (var i = 0; i < rows.length; i++){
            //TODO do real likes and comments load
            var post = {likes: [], comments: []};
            for(var prop in rows[i]){
                if (rows[i].hasOwnProperty(prop)){
                    post[prop] = rows[i][prop];
                }
            }
            posts.push(post);
        }
        response.json(posts);
    });
});

app.post('/api/posts', function(request, response){

});