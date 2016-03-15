/**
 * User: EGordina
 * Date: 01.03.2016
 * Time: 15:26
 */
angular.module('blogArtist.blog').controller('CommentController', CommentController);
CommentController.$inject = ['$scope', 'Socket'];

function CommentController($scope, Socket) {
    var vm = this;

    Socket.on('commentsReady:' + $scope.vm.id, function(comments){
        $scope.vm.comments = comments;
    });

    Socket.emit('readyForComments', $scope.vm.id);
}
