import { IAttachmentList } from './attachment';

export interface ITopic {
    id: number;
    title: string;
    created: number;
    created_by: number;
    updated: number;
    updated_by: number;
    is_closed: boolean;
    is_fixed: boolean;
    comments: number;
}

export interface ITopicComment {
    id: number;
    from_id: number;
    date: number;
    text: string;
    attachments: IAttachmentList;
    can_edit: boolean;
    likes: {
        count: number;
        user_likes: boolean;
        can_like: boolean;
    };
}
