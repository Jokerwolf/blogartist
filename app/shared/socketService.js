/**
 * Created by jokerwolf on 28/02/16.
 */
angular.module('blogArtist.blog').factory('Socket', ['$rootScope', 'serverURL', function($rootScope, serverURL) {
    var socket = io.connect(serverURL);

    return {
        on: function(eventName, callback){
            console.log('on');
            socket.on(eventName, function(){
                var args = arguments;
                $rootScope.$apply(function(){
                    callback.apply(socket, args);
                });
            });
        },
        emit: function(eventName, data, callback){
            console.log('emit');
            socket.emit(eventName, data, function(){
                var args = arguments;
                $rootScope.$apply(function(){
                    if(callback){
                        callback.apply(socket, args);
                    }
                });
            });
        }
    };
}]);
