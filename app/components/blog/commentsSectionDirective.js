/**
 * User: EGordina
 * Date: 12.02.16
 * Time: 16:45
 */
blogModule.directive('commentsSection', ['$sce', function($sce) {
    function manageInput($scope, element, attrs){
        $scope.newComment = null;

        var newCommentContainer = element.find('.new-comment-container');
        newCommentContainer.on('focus', function(){
            if ($scope.newComment == null){
                //newCommentContainer.html('');
            }
        });

        newCommentContainer.on('blur', function(){
            $scope.$apply();
        });

        newCommentContainer.on('keydown', function(e){
            if (e.ctrlKey && e.keyCode == 13){
                newCommentContainer.html('');
                newCommentContainer.blur();

                $scope.data.comments.push({text: $sce.trustAsHtml($scope.newComment)});
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

blogModule.filter('newCommentFilter', ['$sce', function($sce){
    return function(newComment){
        return newComment == null ? $sce.trustAsHtml("Comment here") : $sce.trustAsHtml(newComment);
    };
}]);
