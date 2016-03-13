/**
 * User: EGordina
 * Date: 12.02.16
 * Time: 16:45
 */
blogModule.directive('commentsSection', ['Socket', function(Socket) {
    function commentsSectionLink($scope, element, attrs){
        $scope.newComment = {};

        $scope.addNewComment = function(){
            $scope.newComment = { post_id: $scope.data.id, content: newCommentContainer.html() };
            $scope.data.comments.push($scope.newComment);

            Socket.emit('newComment', $scope.newComment);

            newCommentContainer.html('');
            $scope.newComment = {};

            newCommentContainer.blur();
            window.getSelection().removeAllRanges();
        };

        var newCommentContainer = element.find('.new-comment-container');
        newCommentContainer.on('focus', function(){
            if ($scope.newComment.content == null){
                newCommentContainer.html('');
            }
        });

        newCommentContainer.on('keydown', function(e){
            if (e.ctrlKey && e.keyCode == 13) {
                $scope.$apply($scope.addNewComment());
            }
        });
    }

    return {
        restrict: 'E',
        templateUrl: '/components/comment/commentsSection-template.html',
        replace: true,
        link: commentsSectionLink
    };
}]);
