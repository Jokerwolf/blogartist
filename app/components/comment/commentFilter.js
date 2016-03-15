/**
 * Created by jokerwolf on 28/02/16.
 */
angular.module('blogArtist.blog').filter('newCommentFilter', [function(){
    return function(newComment){
        return newComment == null ? "Comment here" : newComment;
    };
}]);
