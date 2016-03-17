/**
 * User: EGordina
 * Date: 16.02.16
 * Time: 20:48
 */
var comment = (function() {
    var commentTemplate = {
        id: -1,
        author: '',
        commentDate: '',
        content: ''
    };

    return function (){
        return {
            get: function (id, content, ...other) {
                return Object.assign(Object.create(commentTemplate), {
                    id: id,
                    content: content,
                    author: other['author'] || 'Anonymous'
                });
            },
            getFromJson: function(jsonData){
                return Object.assign(Object.create(commentTemplate), {
                    id: jsonData.id,
                    content: jsonData.content,
                    author: jsonData.author || 'Anonymous'
                });
            }
        };
    };
})();
