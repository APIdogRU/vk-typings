import type { ICommentThread } from './ICommentThread';
import type { ILikesInfo } from './ILikesInfo';
import type { IAttachments } from './IAttachments';

export interface IComment {
    /** Хозяин объекта, под которым написали комментарий */
    owner_id: number;
    /** Идентификатор комментария */
    id: number;
    /** Пост, под которым написан комментарий */
    post_id: number;
    /** Автор комментария */
    from_id: number;
    date: number;
    text: string;
    reply_to_user?: number;
    reply_to_comment?: number;
    likes: ILikesInfo;
    attachments?: IAttachments;
    parents_stack?: number[];
    thread?: ICommentThread;
    can_edit?: boolean;
    deleted?: boolean;
}
