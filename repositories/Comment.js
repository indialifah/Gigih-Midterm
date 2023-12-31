import Comment from '../models/Comment.js';

export const addComment = (username, comment_text, video_id) => {
    const newComment = Comment.insertOne({username, comment_text, video_id});

    return newComment;
};

export const getAllComments = () => {
    const allComments = Comment.find();

    return allComments;
};

export const getCommentById = (id) => {
    const comment = Comment.findById({_id: id});

    return comment;
};

export const getCommentByVideoId = (video_id) => {
    const videoComment = Comment.find({video_id});

    return videoComment;
};