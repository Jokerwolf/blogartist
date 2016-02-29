/**
 * User: EGordina
 * Date: 12.02.16
 * Time: 16:45
 */
blogModule.directive('commentsSection', function() {
    function manageInput($scope, element, attrs){
        $scope.newComment = null;

        var newCommentContainer = element.find('.new-comment-container');
        newCommentContainer.on('focus', function(){
            if ($scope.newComment == null){
                newCommentContainer.html('');
            }
        });

        newCommentContainer.on('keydown', function(e){
            $scope.$apply(function(){
                if (e.ctrlKey && e.keyCode == 13){
                    $scope.newComment = newCommentContainer.html();
                    $scope.data.comments.push({content: ($scope.newComment)});
                    newCommentContainer.html('');
                    $scope.newComment = null;
                    newCommentContainer.blur();
                    window.getSelection().removeAllRanges();
                }
            });
        });
    }

    return {
        restrict: 'E',
        templateUrl: '/components/post/commentsSection-template.html',
        replace: true,
        link: manageInput
    };
});
