/**
 * Created by jokerwolf on 26/12/15.
 */
blogModule.controller('postCtrl',['$scope', '$sce', 'Posts', 'CommentSocket', function($scope, $sce, Posts, CommentSocket) {
    Posts.query(null, function (posts) {
        $scope.posts = posts.map(function (element) {
            return post().fromJson(element);
        });
    });

    $scope.likePost = function (index) {
        //TODO change to specific like add/remove
        if (!$scope.posts[index].isLiked) {
            $scope.posts[index].likes.push({});
            $scope.posts[index].isLiked = true;
        } else {
            $scope.posts[index].likes.pop();
            $scope.posts[index].isLiked = false;
        }
    };
    $scope.commentPost = function (index) {
        $scope.posts[index].isCommenting = !$scope.posts[index].isCommenting;
    };
}]);