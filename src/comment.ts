import { IAttachmentList } from './attachment';
import { IApiList } from './base';

export interface IComment {
    owner_id: number;
    post_id: number;
    id: number;
    from_id: number;
    date: number;
    text: string;
    reply_to_user?: number;
    reply_to_comment?: number;
    likes: {
        count: number;
        user_likes: boolean;
        can_like: boolean;
        can_publish: boolean;
    };
    attachments?: IAttachmentList;
    parents_stack?: number[];
    thread?: ICommentThread;
    can_edit?: boolean;
    deleted?: boolean;
}

export interface ICommentThread extends IApiList<IComment> {
    can_post: boolean;
    show_reply_button: boolean;
    groups_can_post: boolean;
}
