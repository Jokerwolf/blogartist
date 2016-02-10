/**
 * User: EGordina
 * Date: 10.02.16
 * Time: 15:48
 */
blogModule.directive('blogPost', function() {
    return {
        restrict: 'E',
        templateUrl: '/components/blog/post-template.html',
        replace: true,
        scope: {
            data: '='
        }
    };
});
