/**
 * User: EGordina
 * Date: 16.03.2016
 * Time: 17:42
 */
(function(){
    angular.module('blogArtist.shared').directive('navigation', navigationDirective);

    function navigationDirective(){
        return {
            restrict: 'E',
            templateUrl: '/shared/navigation/navigation-template.html',
            replace: true
        };
    }
})();
