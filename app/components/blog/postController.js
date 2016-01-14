/**
 * Created by jokerwolf on 26/12/15.
 */
angular.module('blog').controller('postCtrl',['$scope', '$sce', function($scope, $sce){
    $scope.posts = initFakePosts($sce);
    $scope.posts = $scope.posts.concat(initFakePosts($sce));
}])
.directive('blogPost', function() {
    return {
        restrict: 'E',
        templateUrl: '/app/components/blog/post-template.html',
        replace: true,
        scope: {
            data: '='
        }
    };
});

function initFakePosts($sce){
    var fakePosts = [];

    var fakePost = new Post('Something I wanted to say' + Math.random(), 'Monday 10th December, 2015');
    fakePost.setContent($sce.trustAsHtml('<p>\
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.\
        Aenean sit amet vestibulum purus.\
        Nunc mattis tincidunt tempus.\
        Aliquam lacinia elementum commodo.\
        Nam rhoncus, sem vitae faucibus tincidunt, dui nibh aliquam dolor, quis suscipit metus lorem et tellus.\
        Donec feugiat nisl ut lobortis tincidunt.\
        Curabitur eleifend lectus sit amet est fermentum volutpat.\
    </p>\
    <p>\
    <img src="/assets/images/post-pic1.jpg"/>\
    </p>\
    <p>\
        Vivamus at purus at elit mattis egestas. Vestibulum consectetur mattis arcu at aliquet.\
        Integer eros lorem, egestas vitae urna quis, ornare iaculis ligula.\
        Integer vehicula posuere convallis. In at lorem tempus, efficitur enim et, sodales elit.\
        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\
        Pellentesque ex ipsum, imperdiet quis feugiat vel, facilisis non libero.\
        Aliquam ac tempor purus, eget malesuada turpis.\
        Ut tempor, magna vitae pretium condimentum, lectus mauris consequat erat, vitae lacinia dui velit vitae dui.\
        Nunc ligula turpis, tristique at risus et, eleifend pellentesque enim.\
    </p>\
    <p>\
        Aliquam tincidunt metus sed erat elementum, ac fermentum erat facilisis.\
        Vestibulum nec porttitor mauris, vel vulputate lorem.\
        Cras varius dictum velit cursus dictum.\
        Mauris elementum posuere eros, et consequat justo.\
        Quisque blandit tincidunt eleifend.\
        Suspendisse potenti.\
        Cras sagittis dolor a porta dapibus. Donec eget eros cursus, lacinia risus et, lobortis orci.\
        In at lobortis est, non tempus orci.\
    </p>'));
    fakePost.setComments([{},{}]);
    fakePost.setLikes([{}, {}, {}]);

    fakePosts.push(fakePost);
    return fakePosts;
}