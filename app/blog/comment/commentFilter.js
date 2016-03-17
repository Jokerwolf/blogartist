/**
 * Created by jokerwolf on 28/02/16.
 */
(function() {
    angular.module('blogArtist.blog').filter('newCommentFilter', newCommentFilter);

    function newCommentFilter() {
        return function (newComment) {
            return newComment == null ? "Comment here" : newComment;
        };
    }
})();
