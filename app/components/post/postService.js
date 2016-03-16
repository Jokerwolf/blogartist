/**
 * User: EGordina
 * Date: 10.02.16
 * Time: 14:58
 */
(function() {
    angular.module('blogArtist.blog').factory('postsService', postsService);

    postsService.$inject = ['$resource'];

    function postsService($resource) {
        return $resource('/api/posts');
    }
})();