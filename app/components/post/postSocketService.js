/**
 * Created by jokerwolf on 28/02/16.
 */
blogModule.factory('PostsSocket', function() {
    var socket = io('http://localhost:8081');

    return socket;
});
