/**
 * Created by jokerwolf on 26/12/15.
 */
(function(){
angular.module('blogArtist.blog').controller('PostController',  PostController);

PostController.$inject = ['postsService'];

function PostController(postsService) {
    var vm = this;
    vm.posts = [];

    activate();

    function activate(){
        postsService.query(null, function (posts) {
            vm.posts = posts.map(function (element) {
                return post().fromJson(element);
            });
        });
    }
}
})();