/**
 * Created by jokerwolf on 26/12/15.
 */
function Post(title, postDate){
    this.title = title || '';
    this.postDate = postDate || '';
    this.content = '';
    this.comments = [];
    this.likes = [];

    this.setTitle = function(title){
        this.title = title;
    };
    this.getTitle = function(){
        return this.title;
    };

    this.setPostDate = function(postDate){
        this.postDate = postDate;
    };
    this.getPostDate = function(){
        return this.postDate;
    };

    this.setContent = function(content){
        this.content = content;
    };
    this.getContent = function(){
        return this.content;
    };

    this.addComment = function(comment){
        this.comments.push(comment);
    };

    this.addLike = function(like){
        this.likes.push(like);
    };

    this.setComments = function(comments){
        this.comments = comments;
    };

    this.setLikes = function(likes){
        this.likes = likes;
    };

    this.getLikesCount = function(){
        return this.likes != null ? this.likes.length : 0;
    };

    this.getCommentsCount = function(){
        return this.comments != null ? this.comments.length : 0;
    };
}
