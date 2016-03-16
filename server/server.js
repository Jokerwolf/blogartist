/**
 * User: EGordina
 * Date: 08.02.16
 * Time: 14:01
 */

var express = require('express');
var path = require('path');
var dbControllerModule = require('./db/dbController.js');
var app = express();
var bodyParser = require('body-parser');

var dbController = new dbControllerModule();


app.use("/",  express.static(path.join(__dirname, '../app')));
app.use("/assets",  express.static(path.join(__dirname, '../app/assets')));
app.use("/components",  express.static(path.join(__dirname, '../app/components')));
app.use("/images", express.static(path.join(__dirname, '../app/assets/images')));
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

var server = require('http').createServer(app);
server.listen(8081);

var io = require('socket.io').listen(server);

io.on('connection', function (socket) {
    console.log('connected');
    socket.on('readyForComments', function(postId){
        loadComments(postId)
    });
    socket.on('newComment', function (comment) {
        dbController.callStatement('addComment',
            [ comment.post_id, 'Anonymous', comment.content ],
            function(result){
                comment.id = result.insertId;
                socket.emit('commentSaved', comment);
            });
    });
});

function loadComments(postId){
    var comments = [];
    dbController.callStatement('getComments', [postId], function(rows){
        for (var i = 0; i < rows.length; i++){
            var comment = {};
            for(var prop in rows[i]){
                if (rows[i].hasOwnProperty(prop)){
                    comment[prop] = rows[i][prop];
                }
            }
            comments.push(comment);
        }

        io.emit('commentsReady:' + postId, comments);
    });
}

app.get('/api/posts', function(request, response){
    var posts = [];
    dbController.callStatement('getPosts', null, function(rows){
        for (var i = 0; i < rows.length; i++){
            var post = {likes: [], comments: []};
            for(var prop in rows[i]){
                if (rows[i].hasOwnProperty(prop)){
                    post[prop] = rows[i][prop];
                }
            }
            posts.push(post);
            //loadComments(post);
        }
        response.json(posts);
    });
});

app.post('/api/posts', function(request, response){
});

app.post('/api/comments', function(request, response){
    //TODO Remove author hardcode
    var comment = request.body;
    dbController.callStatement('addComment',
        [ request.body.post_id, 'Anonymous', request.body.content ], function(result){
        comment.id = result.insertId;
    });

    response.json(comment);
});