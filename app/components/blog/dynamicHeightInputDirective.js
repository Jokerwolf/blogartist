/**
 * User: EGordina
 * Date: 12.02.16
 * Time: 16:45
 */
blogModule.directive('dynamicHeightInput', ['$sce', function($sce) {
    function manageInput($scope, element, attrs){
        $scope.comment = $sce.trustAsHtml("Commnet here...");
        var textContainer = element.find(".comment-text-container");
        element.on('click', function(){
            var fakeInput = $('<input/>', {'type': 'text', 'value': $(textContainer).html(), 'class': 'comment-text-container'});
            $(this).find(".comment-text-container").hide();
            textContainer.hide();
            $(this).append(fakeInput);
            fakeInput.on('blur', function(){
                $(textContainer).html($(this).val());
                $(this).remove();
                $(textContainer).show();
            });
            fakeInput.focus();
        });

        element.on('keypress', function(e){
            if (e.keyCode == 13){
                //Add new input
                console.log('Click');
            }
        });

        function manageControls(){
            var fakeInput = $('<input/>', {'type': 'text', 'value': $(textContainer).html(), 'class': 'comment-text-container'});
            element.find(".comment-text-container").hide();
            textContainer.hide();
            element.append(fakeInput);
            fakeInput.on('blur', function(){
                $(textContainer).html($(this).val());
                $(this).remove();
                $(textContainer).show();
            });
            fakeInput.focus();
        }
    }

    return {
        restrict: 'E',
        templateUrl: '/components/blog/dynamicHeightInput-template.html',
        replace: true,
        link: manageInput
    };
}]);
