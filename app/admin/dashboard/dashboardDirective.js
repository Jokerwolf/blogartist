/**
 * User: EGordina
 * Date: 17.03.2016
 * Time: 14:43
 */
(function(){
    angular.module('blogArtist.admin').directive('dashboard', dashboardDirective);

    function dashboardDirective(){
        return {
            restrict: 'E',
            replace: true,
            templateUrl: '/admin/dashboard/dashboard-template.html'
        };
    }
})();
