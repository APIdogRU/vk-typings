import { IVKLikeInfo } from './like';
import { IVKAttachmentList } from './attachment';
import { IVKGeo } from './geo';

export interface IVKWall {
    id: number;
    owner_id: number;
    from_id: number;
    created_by?: number;
    date: number;
    text: string;
    reply_owner_id?: number;
    reply_post_id?: number;
    comments: IVKWallComments;
    likes: IVKLikeInfo;
    views: IVKWallViews;
    post_type: 'post' | 'copy' | 'reply' | 'postpone' | 'suggest';
    post_source?: IVKWallPostSource;
    attachments?: IVKAttachmentList;
    geo?: IVKGeo;
    signer_id?: number;
    copy_history?: IVKWall[];
    can_pin?: boolean;
    can_delete?: boolean;
    can_edit?: boolean;
    is_pinned?: boolean;
    marked_as_ads?: boolean;
    is_favorite?: boolean;
    postponed_id?: boolean;
}

export interface IVKWallComments {
    count: number;
    can_post: boolean;
    groups_can_post: boolean;
    can_close: boolean;
    can_open: boolean;
}

export interface IVKWallViews {
    count: number;
}

export type TVKWallPostSourceType = 'vk' | 'widget' | 'api' | 'rss' | 'sms';

export interface IVKWallPostSource {
    type: TVKWallPostSourceType;
    platform: 'android' | 'iphone' | 'wphone' | 'instagram';
    data?: 'profile_activity' | 'profile_photo' | 'comments' | 'like' | 'poll';
    url: string;
}
