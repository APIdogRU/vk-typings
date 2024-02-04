import type { IAttachments } from './IAttachments';
import type { ICommentsInfo } from './ICommentsInfo';
import type { IGeo } from './IGeo';
import type { ILikesInfo } from './ILikesInfo';
import type { IPostActivity } from './IPostActivity';
import type { IPostSource } from './IPostSourceType';
import type { IReactionCount } from './IReactionCount';
import type { IRepostsInfo } from './IRepostsInfo';
import type { IViewsInfo } from './IViewsInfo';
import type { IVkApiList } from './IVkApiList';

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
    comments?: ICommentsInfo & { can_open?: boolean; };
    likes: ILikesInfo;
    reposts?: IRepostsInfo;
    views?: IViewsInfo;
    type: string; // TODO
    post_type?: 'post' | 'copy' | 'reply' | 'postpone' | 'suggest' | 'post_ads' | 'photo' | 'video';
    post_source?: IPostSource;
    attachments?: IAttachments;
    geo?: IGeo;
    signer_id?: number;
    copy_history?: IPost[];
    can_pin?: 0 | 1;
    can_delete?: 0 | 1;
    can_edit?: boolean;
    is_pinned?: boolean;
    marked_as_ads?: boolean;
    is_favorite?: boolean;
    is_deleted?: boolean;
    deleted_reason?: string;
    deleted_details?: string;
    postponed_id?: boolean;
    final_post?: boolean;
    friends_only?: boolean;
    can_archive?: boolean;
    is_archived?: boolean;
    edited?: number;
    activity?: IPostActivity;
    zoom_text?: true;
    short_text_rate?: number;
    reaction_set_id?: string;
    reactions?: IVkApiList<IReactionCount> & {
        user_reaction?: number;
    };
    hash?: string;
}
