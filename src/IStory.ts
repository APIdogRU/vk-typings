import type { IPhoto } from './IPhoto';
import type { IStoryClickableStickers } from './IStoryClickableStickers';
import type { IStoryLink } from './IStoryLink';
import type { IStoryReplies } from './IStoryReplies';
import type { IVideo } from './IVideo';

interface IStoryBase<T extends 'photo' | 'video'> {
    type: T;
    owner_id: number;
    id: number;
    date: number;
    expires_at: number;
    /** Если true, то объект содержит только поля id, owner_id, is_deleted */
    is_expired?: boolean;
    /** Если true, то объект содержит только поля id, owner_id, is_deleted */
    is_deleted?: boolean;
    can_see?: 1;
    can_like?: boolean;
    can_hide?: 0 | 1;
    is_ads?: boolean;
    link?: IStoryLink;
    parent_story_owner_id?: number;
    parent_story_id?: number;
    parent_story?: IStory;
    replies?: IStoryReplies;
    can_reply?: 0 | 1;
    can_share?: 0 | 1;
    can_comment?: 0 | 1;
    clickable_stickers?: IStoryClickableStickers;
    views?: number;
    access_key?: string;
    seen?: boolean;
    is_one_time?: boolean;
    reaction_set_id?: 'reactions';
    no_sound?: boolean;
    can_ask?: 0 | 1;
    can_ask_anonymous?: 0 | 1;
    preloading_enabled?: boolean;
}

export interface IStoryPhoto extends IStoryBase<'photo'> {
    photo: Omit<IPhoto, 'likes' | 'reposts'>;
}

export interface IStoryVideo extends IStoryBase<'video'> {
    video: Omit<IVideo, 'comments' | 'can_comment' | 'can_like' | 'can_repost' | 'can_add_to_faves'> & Required<Pick<IVideo, 'image'>>;
}

export type IStory = IStoryPhoto | IStoryVideo;
