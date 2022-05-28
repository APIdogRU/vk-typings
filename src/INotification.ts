import type { IComment } from './IComment';
import type { IPhoto } from './IPhoto';
import type { IPost } from './IPost';
import type { ITopic } from './ITopic';
import type { IVideo } from './IVideo';

interface INotificationBase<
    Type extends string,
    Feedback,
    Parent = undefined,
    Reply = undefined,
> {
    type: Type;
    feedback: Feedback;
    parent: Parent;
    reply?: Reply;
}

type IList<T> = { items: T[] };
type IFromUser = { from_id: number };
type ICommentOf<K extends string, T> = Omit<IComment, 'reply_to_user' | 'reply_to_comment' | 'likes' | 'parents_stack' | 'thread' | 'can_edit' | 'deleted'> & { [key in K]: T; };

export type INotificationTypeFollow =
    INotificationBase<'follow', IList<IFromUser>>;

export type INotificationTypeFriendAccepted =
    INotificationBase<'friend_accepted', IList<IFromUser>>;

export type INotificationTypeMention =
    INotificationBase<'mention', IPost>;

export type INotificationTypeMentionComments =
    INotificationBase<'mention_comments', IComment, IPost>;

export type INotificationTypeMentionCommentsPhoto =
    INotificationBase<'mention_comment_photo', IComment, IPost>;

export type INotificationTypeMentionCommentsVideo =
    INotificationBase<'mention_comment_video', IComment, IPost>;

export type INotificationTypeWall =
    INotificationBase<'wall', IPost>;

export type INotificationTypeCommentPost =
    INotificationBase<'comment_post', IComment, IPost, IComment>;

export type INotificationTypeCommentPhoto =
    INotificationBase<'comment_photo', IComment, IPhoto, IComment>;

export type INotificationTypeCommentVideo =
    INotificationBase<'comment_video', IComment, IVideo, IComment>;

export type INotificationTypeReplyComment =
    INotificationBase<'reply_comment', IComment, ICommentOf<'post', IPost>, IComment>;

export type INotificationTypeReplyCommentPhoto =
    INotificationBase<'reply_comment_photo', IComment, ICommentOf<'photo', IPhoto>, IComment>;

export type INotificationTypeReplyCommentVideo =
    INotificationBase<'reply_comment_video', IComment, ICommentOf<'video', IVideo>, IComment>;

export type INotificationTypeReplyTopic =
    INotificationBase<'reply_topic', IComment, ITopic, IComment>;

export type INotificationTypeLikePost =
    INotificationBase<'like_post', IList<IFromUser>, IPost>;

export type INotificationTypeLikePhoto =
    INotificationBase<'like_photo', IList<IFromUser>, IPhoto>;

export type INotificationTypeLikeVideo =
    INotificationBase<'like_video', IList<IFromUser>, IVideo>;

export type INotificationTypeLikeComment =
    INotificationBase<'like_comment', IList<IFromUser>, ICommentOf<'post', IPost>>;

export type INotificationTypeLikeCommentPhoto =
    INotificationBase<'like_comment_photo', IList<IFromUser>, ICommentOf<'photo', IPhoto>>;

export type INotificationTypeLikeCommentVideo =
    INotificationBase<'like_comment_video', IList<IFromUser>, ICommentOf<'video', IVideo>>;

export type INotificationTypeLikeCommentTopic =
    INotificationBase<'like_comment_topic', IList<IFromUser>, ICommentOf<'topic', ITopic>>;

export type INotificationTypeCopyPost =
    INotificationBase<'copy_post', IList<IFromUser>, IPost>;

export type INotificationTypeCopyPhoto =
    INotificationBase<'copy_photo', IList<IFromUser>, IPhoto>;

export type INotificationTypeCopyVideo =
    INotificationBase<'copy_video', IList<IFromUser>, IVideo>;

export type INotification =
    | INotificationTypeFollow
    | INotificationTypeFriendAccepted
    | INotificationTypeMention
    | INotificationTypeMentionComments
    | INotificationTypeMentionCommentsPhoto
    | INotificationTypeMentionCommentsVideo
    | INotificationTypeWall
    | INotificationTypeCommentPost
    | INotificationTypeCommentPhoto
    | INotificationTypeCommentVideo
    | INotificationTypeReplyComment
    | INotificationTypeReplyCommentPhoto
    | INotificationTypeReplyCommentVideo
    | INotificationTypeReplyTopic
    | INotificationTypeLikePost
    | INotificationTypeLikePhoto
    | INotificationTypeLikeVideo
    | INotificationTypeLikeComment
    | INotificationTypeLikeCommentPhoto
    | INotificationTypeLikeCommentVideo
    | INotificationTypeLikeCommentTopic
    | INotificationTypeCopyPost
    | INotificationTypeCopyPhoto
    | INotificationTypeCopyVideo;
