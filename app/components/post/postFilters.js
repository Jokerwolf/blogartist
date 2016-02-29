/**
 * Created by jokerwolf on 28/02/16.
 */
blogModule.filter('newCommentFilter', [function(){
    return function(newComment){
        return newComment == null ? "Comment here" : newComment;
    };
}]);
