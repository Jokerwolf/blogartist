/**
 * User: EGordina
 * Date: 12.02.16
 * Time: 16:45
 */
blogModule.directive('commentsSection', ['$sce', function($sce) {
    function manageInput($scope, element, attrs){
        $scope.comment = $sce.trustAsHtml("Commnet here...");
        var newComment = element.find('.comment-container');
        element.on('focus', function(){

        });

        newComment.on('keydown', function(e){
            if (e.ctrlKey && e.keyCode == 13){
                console.log('Add new comment');
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
