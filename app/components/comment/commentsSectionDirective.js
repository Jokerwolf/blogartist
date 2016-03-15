/**
 * User: EGordina
 * Date: 12.02.16
 * Time: 16:45
 */
angular.module('blogArtist.blog').directive('commentsSection', commentsSectionDirective);

commentsSectionDirective.$inject = ['Socket'];

function commentsSectionDirective(Socket) {
    function link(scope, element, attrs){
        scope.newComment = {};

        scope.addNewComment = function(){
            scope.newComment = { post_id: scope.vm.id, content: newCommentContainer.html() };
            scope.vm.comments.push(scope.newComment);

            Socket.emit('newComment', scope.newComment);

            newCommentContainer.html('');
            scope.newComment = {};

            newCommentContainer.blur();
            window.getSelection().removeAllRanges();
        };

        var newCommentContainer = element.find('.new-comment-container');
        newCommentContainer.on('focus', function(){
            if (scope.newComment.content == null){
                newCommentContainer.html('');
            }
        });

        newCommentContainer.on('keydown', function(e){
            if (e.ctrlKey && e.keyCode == 13) {
                scope.$apply(scope.addNewComment());
            }
        });
    }

    return {
        restrict: 'E',
        templateUrl: '/components/comment/commentsSection-template.html',
        replace: true,
        link: link
    };
}
