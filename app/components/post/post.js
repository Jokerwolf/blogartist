/**
 * Created by jokerwolf on 26/12/15.
 */

var post = (function(){
    var postTemplate = {
        id: -1,
        title: '',
        postDate: '',
        content: '',
        comments: [],
        likes: [],

        //TODO Remove from here
        isLiked: false,
        isCommenting: false,

        getLikesCount: function(){
            return this.likes != null ? this.likes.length : 0;
        },
        getCommentsCount: function(){
            return this.comments != null ? this.comments.length : 0;
        }
    };

    return function(){
        return {
            get: function(id, title, postDate, content, comments, likes){
                return Object.assign(Object.create(postTemplate), {
                    id: id,
                    title: title,
                    postDate: postDate,
                    content: content,
                    comments: comments || [],
                    likes: likes || []
                });
            },
            fromJson: function(jsonData){
                return this.get(jsonData.id, jsonData.title, jsonData.postDate, jsonData.content);
            }
        };
    };
})();