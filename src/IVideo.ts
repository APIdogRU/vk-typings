import type { ILikesInfo } from './ILikesInfo';
import type { IPhotoPrivacy } from './IPhotoPrivacy';
import type { IRepostsInfo } from './IRepostsInfo';
import type { IVideoImage } from './IVideoImage';
import type { VideoFilesKey } from './VideoFiles';

export interface IVideo {
    owner_id: number;
    id: number;
    access_key?: string;
    title: string;
    description: string;
    duration: number;
    first_frame: IVideoImage[];
    image: IVideoImage[];
    date: number;
    adding_date: number;
    views: number;
    local_views?: number;
    comments: number;
    player: string;
    platform: string;
    can_edit: boolean;
    can_add: boolean;
    is_private: boolean;
    processing?: boolean;
    live?: boolean;
    upcoming?: boolean;
    is_favourite?: boolean;
    repeat?: boolean;
    width: number;
    height: number;
    can_comment: boolean;
    can_like: boolean;
    can_repost: boolean;
    can_subscribe: boolean;
    can_add_to_faves: boolean;
    files?: Partial<Record<VideoFilesKey, string>> & {
        failover_host?: string;
    };
    likes?: Pick<ILikesInfo, 'count' | 'user_likes'>;
    reposts?: IRepostsInfo;
    privacy_view?: IPhotoPrivacy;
    privacy_comment?: IPhotoPrivacy;
    track_code: string;
    // Неизвестно что это
    response_type?: 'full' | 'min';
}
