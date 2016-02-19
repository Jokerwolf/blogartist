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
//app.listen(8081);

var server = require('http').createServer(app);
server.listen(8081);
var io = require('socket.io').listen(server);

io.on('connection', function (socket) {
    console.log('connected');
    //socket.emit('commentsReady', { hello: 'world' });
//    socket.on('my other event', function (data) {
//        console.log(data);
//    });
});

function loadComments(post){
    dbController.callStatement('getComments', [post.id], function(rows){
        for (var i = 0; i < rows.length; i++){
            var comment = {};
            for(var prop in rows[i]){
                if (rows[i].hasOwnProperty(prop)){
                    comment[prop] = rows[i][prop];
                }
            }
            post.comments.push(comment);
        }
        io.emit('commentsReady', {postId: post.id, comments: post.comments});
    });
}

app.get('/api/posts', function(request, response){
    var posts = [];
    dbController.callStatement('getPosts', null, function(rows){
        for (var i = 0; i < rows.length; i++){
            //TODO do real likes and comments load
            var post = {likes: [], comments: []};
            for(var prop in rows[i]){
                if (rows[i].hasOwnProperty(prop)){
                    post[prop] = rows[i][prop];
                }
            }
            posts.push(post);
            loadComments(post);
        }
        response.json(posts);
    });
});

app.post('/api/posts', function(request, response){

});