import type { IAttachments } from './IAttachments';
import type { ILikesInfo } from './ILikesInfo';

export interface ITopicComment {
    id: number;
    from_id: number;
    date: number;
    text: string;
    attachments: IAttachments;
    can_edit: boolean;
    likes: Omit<ILikesInfo, 'can_publish'>;
}
