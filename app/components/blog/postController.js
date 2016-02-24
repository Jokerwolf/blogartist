/**
 * Created by jokerwolf on 26/12/15.
 */
blogModule.controller('postCtrl',['$scope', '$sce', 'Posts', function($scope, $sce, Posts) {
    var socket = io('http://localhost:8081');

    socket.on('commentsReady', function (data) {
        $scope.posts.filter((p) => {
            return p.id == data.postId
        })[0].comments = data.comments;
    });

    Posts.get(null, function (posts) {
        $scope.posts = posts.map(function (element) {
            return postFromJson(element);
        });
    });


    $scope.$watchCollection('data.comments', function(newComments, oldComments) {
        if (oldComments.length != newComments.length){
            //need to save changes
            console.log('saving...');
        }
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

    function postFromJson(jsonData) {
        return new Post(jsonData.id, jsonData.title, jsonData.postDate, $sce.trustAsHtml(jsonData.content),
            jsonData.likes, jsonData.comments.map(function (c) {
                c.text = $sce.trustAsHtml(c.text);
                return c;
            }));
    }
}]);