/**
 * Created by jokerwolf on 26/12/15.
 */
blogModule.controller('postCtrl',['$scope', '$sce', 'Posts', function($scope, $sce, Posts){
        Posts.get(null, function(posts){
            $scope.posts = posts.map(function(element){
                return postFromJson(element);
            });
        });

        $scope.likePost = function(index){
            if(!$scope.posts[index].isLiked){
                $scope.posts[index].likes.push({});
                $scope.posts[index].isLiked = true;
            } else {
                $scope.posts[index].likes.pop();
                $scope.posts[index].isLiked = false;
            }
        };
        $scope.commentPost = function(){
            //todo do something
        };

        function postFromJson(jsonData){
            return new Post(jsonData.id, jsonData.title, jsonData.postDate, $sce.trustAsHtml(jsonData.content));
        }
    }]);