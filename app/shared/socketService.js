/**
 * Created by jokerwolf on 28/02/16.
 */
(function(){
    angular.module('blogArtist.shared').factory('socketService', socketService);

    socketService.$inject = ['$rootScope', 'serverURL'];

    function socketService($rootScope, serverURL) {
        var socket = io.connect(serverURL);

        return {
            on: function (eventName, callback) {
                socket.on(eventName, function () {
                    var args = arguments;
                    $rootScope.$apply(function () {
                        callback.apply(socket, args);
                    });
                });
            },
            emit: function (eventName, data, callback) {
                socket.emit(eventName, data, function () {
                    var args = arguments;
                    $rootScope.$apply(function () {
                        if (callback) {
                            callback.apply(socket, args);
                        }
                    });
                });
            }
        };
    }
})();
