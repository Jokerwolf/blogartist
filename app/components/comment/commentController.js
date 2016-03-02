/**
 * User: EGordina
 * Date: 01.03.2016
 * Time: 15:26
 */
blogModule.controller('commentCtrl',['$scope', 'CommentSocket', function($scope, CommentSocket) {
    var readyEventName = 'commentsReady:' + $scope.data.id;
    $scope.data.comments = [];

    CommentSocket.on(readyEventName, function(comments){
        console.log('commentsReady');
        $scope.data.comments = comments;
    });

    CommentSocket.emit('readyForComments', $scope.data.id);
}]);
