/**
 * User: EGordina
 * Date: 10.02.16
 * Time: 14:58
 */
blogModule.factory('Posts', ['$resource', function($resource){
    return $resource('/api/posts');
}]);

blogModule.factory('Comments', ['$resource', function($resource){
    return $resource('/api/comments');
}]);
