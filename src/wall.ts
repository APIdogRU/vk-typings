import { ILikeInfo } from './like';
import { IAttachmentList } from './attachment';
import { IGeo } from './geo';
import { IRepostInfo } from './repost';
import { IAccount, IComment } from './index';
import { IMedia } from './media';

export interface IWall extends IMedia {
    post_id?: number;
    source_id?: number;
    to_id?: number;
    from_id: number;
    from?: IAccount;
    created_by?: number;
    date: number;
    text: string;
    reply_owner_id?: number;
    reply_post_id?: number;
    comments: IWallComments;
    likes: ILikeInfo;
    reposts: IRepostInfo;
    views: IWallViews;
    type: string; // TODO
    post_type: 'post' | 'copy' | 'reply' | 'postpone' | 'suggest';
    post_source?: IWallPostSource;
    attachments?: IAttachmentList;
    geo?: IGeo;
    signer_id?: number;
    copy_history?: IWall[];
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
    activity?: IWallActivity;
    zoom_text?: boolean;
}

export interface IWallComments {
    count: number;
    can_post: boolean;
    groups_can_post: boolean;
    can_close: boolean;
    can_open: boolean;
}

export interface IWallViews {
    count: number;
}

export type WallPostSourceType = 'vk' | 'widget' | 'api' | 'rss' | 'sms';

export interface IWallPostSource {
    type: WallPostSourceType;
    platform: 'android' | 'iphone' | 'wphone' | 'instagram';
    data?: 'profile_activity' | 'profile_photo' | 'comments' | 'like' | 'poll';
    url: string;
}

export type IWallActivity = IWallActivityComments;

export type IWallActivityComments = {
    type: 'comments';
    comments: IComment[];
}
