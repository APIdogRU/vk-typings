import type { IAttachments } from './IAttachments';
import type { ICommentsInfo } from './ICommentsInfo';
import type { IGeo } from './IGeo';
import type { ILikesInfo } from './ILikesInfo';
import type { IPostActivity } from './IPostActivity';
import type { IPostSource } from './IPostSourceType';
import type { IRepostsInfo } from './IRepostsInfo';
import type { IViewsInfo } from './IViewsInfo';

export interface IPost {
    owner_id?: number;
    id: number;
    /** В некоторых местах вместо id */
    post_id?: number;
    /** В newsfeed.get вместо owner_id */
    source_id?: number;
    /** На стене вместо owner_id */
    to_id?: number;
    from_id: number;
    created_by?: number;
    date: number;
    text: string;
    reply_owner_id?: number;
    reply_post_id?: number;
    comments: ICommentsInfo & { can_open?: boolean; };
    likes: ILikesInfo;
    reposts: IRepostsInfo;
    views: IViewsInfo;
    type: string; // TODO
    post_type: 'post' | 'copy' | 'reply' | 'postpone' | 'suggest' | 'post_ads' | 'photo' | 'video';
    post_source?: IPostSource;
    attachments?: IAttachments;
    geo?: IGeo;
    signer_id?: number;
    copy_history?: IPost[];
    can_pin?: boolean;
    can_delete?: boolean;
    can_edit?: boolean;
    is_pinned?: boolean;
    marked_as_ads?: boolean;
    is_favorite?: boolean;
    postponed_id?: boolean;
    final_post?: boolean;
    friends_only?: boolean;
    can_archive?: boolean;
    is_archived?: boolean;
    edited?: number;
    activity?: IPostActivity;
    short_text_rate?: number;
}
