/**
 * User: EGordina
 * Date: 01.03.2016
 * Time: 15:26
 */
blogModule.controller('commentCtrl',['$scope', 'Socket', function($scope, Socket) {

    Socket.on('commentsReady:' + $scope.data.id, function(comments){
        console.log('commentsReady');
        $scope.data.comments = comments;
    });

    Socket.emit('readyForComments', $scope.data.id);
}]);
