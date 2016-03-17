/**
 * User: EGordina
 * Date: 10.02.16
 * Time: 15:48
 */
(function() {
    angular.module('blogArtist.blog').directive('blogPost', blogPostDirective);

    function blogPostDirective() {
        return {
            restrict: 'E',
            templateUrl: '/blog/post/post-template.html',
            replace: true,
            scope: {
                vm: '='
            },
            link: link
        };

        function link(scope, el, attr, ctrl) {
            scope.likePost = function () {
                //TODO change to specific like add/remove
                if (!scope.vm.isLiked) {
                    scope.vm.likes.push({});
                    scope.vm.isLiked = true;
                } else {
                    scope.vm.likes.pop();
                    scope.vm.isLiked = false;
                }
            };

            scope.commentPost = function () {
                scope.vm.isCommenting = !scope.vm.isCommenting;
            };
        }
    }
})();