/**
 * User: EGordina
 * Date: 12.02.16
 * Time: 16:45
 */
(function() {
    angular.module('blogArtist.blog').directive('commentsSection', commentsSectionDirective);

    commentsSectionDirective.$inject = ['socketService'];

    function commentsSectionDirective(socketService) {
        return {
            restrict: 'E',
            templateUrl: '/components/comment/commentsSection-template.html',
            replace: true,
            scope: true,
            link: link
        };

        function link(scope, element, attrs) {
            console.log(scope);
            scope.addNewComment = function () {
                scope.commentsVM.newComment = { post_id: scope.commentsVM.postId, content: newCommentContainer.html() };
                scope.commentsVM.comments.push(scope.commentsVM.newComment);

                socketService.emit('newComment', scope.commentsVM.newComment);

                newCommentContainer.html('');
                scope.commentsVM.newComment = {};

                newCommentContainer.blur();
                window.getSelection().removeAllRanges();
            };

            var newCommentContainer = element.find('.new-comment-container');
            newCommentContainer.on('focus', function () {
                if (scope.commentsVM.newComment.content == null) {
                    newCommentContainer.html('');
                }
            });

            newCommentContainer.on('keydown', function (e) {
                if (e.ctrlKey && e.keyCode == 13) {
                    scope.$apply(scope.addNewComment());
                }
            });
        }
    }
})();
