/**
 * User: EGordina
 * Date: 12.02.16
 * Time: 16:45
 */
blogModule.directive('commentsSection', ['CommentSocket', function(CommentSocket) {
    function manageInput($scope, element, attrs){
        $scope.newComment = {};

        var newCommentContainer = element.find('.new-comment-container');
        newCommentContainer.on('focus', function(){
            if ($scope.newComment.content == null){
                newCommentContainer.html('');
            }
        });

        newCommentContainer.on('keydown', function(e){
            if (e.ctrlKey && e.keyCode == 13) {
                $scope.$apply(function () {
                    $scope.newComment = { post_id: $scope.id, content: newCommentContainer.html() };
                    $scope.data.comments.push($scope.newComment);

                    CommentSocket.emit('newComment', $scope.newComment);

                    newCommentContainer.html('');
                    $scope.newComment = {};

                    newCommentContainer.blur();
                    window.getSelection().removeAllRanges();
                });
            }
        });
    }

    return {
        restrict: 'E',
        templateUrl: '/components/comment/commentsSection-template.html',
        scope: {
            data: '=',
        },
        replace: true,
        link: manageInput
    };
}]);