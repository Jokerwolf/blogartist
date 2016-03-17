/**
 * User: EGordina
 * Date: 01.03.2016
 * Time: 15:26
 */
(function() {
    angular.module('blogArtist.blog').controller('CommentController', CommentController);

    CommentController.$inject = ['$scope', 'socketService'];

    function CommentController($scope, socketService) {
        var vm = this;

        vm.postId = $scope.vm.id;
        vm.comments = $scope.vm.comments;
        vm.newComment = {};

        socketService.on('commentsReady:' + vm.postId, function (comments) {
            comments.map((el) => {
                vm.comments.push(el)
            });
        });

        socketService.emit('readyForComments', vm.postId);
    }
})();