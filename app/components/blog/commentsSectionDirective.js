/**
 * User: EGordina
 * Date: 12.02.16
 * Time: 16:45
 */
blogModule.directive('commentsSection', ['$sce', function($sce) {
    function manageInput($scope, element, attrs){
        $scope.newComment;

        var newCommentContainer = element.find('.new-comment-container');
        newCommentContainer.on('focus', function(){
            console.log('Add new comment');
            window.getSelection().removeAllRanges();
        });

        newCommentContainer.on('keydown', function(e){
            if (e.ctrlKey && e.keyCode == 13){
                var newComment = newCommentContainer.html();
                newCommentContainer.html('');
                newCommentContainer.blur();
                $scope.data.comments.push({text: $sce.trustAsHtml(newComment)});
                window.getSelection().removeAllRanges();
                $scope.$apply();
            }
        });
    }

    return {
        restrict: 'E',
        templateUrl: '/components/blog/commentsSection-template.html',
        replace: true,
        link: manageInput
    };
}]);
