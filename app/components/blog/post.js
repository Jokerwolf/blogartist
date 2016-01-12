/**
 * Created by jokerwolf on 26/12/15.
 */
function Post(title, postDate){
    var self = this;

    this.setTitle = function(title){
        self.title = title;
    };
    this.getTitle = function(){
        return self.title;
    };

    self.setPostDate = function(postDate){
        self.postDate = postDate;
    };
    self.getPostDate = function(){
        return self.postDate;
    };

    self.setContent = function(content){
        self.content = content;
    };
    self.getContent = function(){
        return self.content;
    };

    self.addComment = function(comment){
        self.comments.push(comment);
    };

    self.addLike = function(like){
        self.likes.push(like);
    };

    self.setComments = function(comments){
        self.comments = comments;
    };

    self.setLikes = function(likes){
        self.likes = likes;
    };

    self.getLikesCount = function(){
        return self.likes != null ? self.likes.length : 0;
    };

    self.getCommentsCount = function(){
        return self.comments != null ? self.comments.length : 0;
    };

    this.title = '';
    this.postDate = '';
    this.content = '';
    this.comments = [];
    this.likes = [];
}
