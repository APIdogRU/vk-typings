import type { ILikesInfo } from './ILikesInfo';
import type { IPhotoPrivacy } from './IPhotoPrivacy';
import type { IRepostsInfo } from './IRepostsInfo';
import type { IVideoImage } from './IVideoImage';
import type { IVideoRestriction } from './IVideoRestriction';
import type { IVideoTimelineThumbs } from './IVideoTimelineThumbs';
import type { VideoFilesKey } from './VideoFiles';

export interface IVideo {
    type: 'video' | 'music_video' | 'movie' | 'live' | 'short_video';
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
    spectators?: number;
    comments: number;
    player: string;
    platform: string;
    can_add: boolean;
    can_edit: boolean;
    can_edit_privacy: boolean;
    can_delete: boolean;
    is_private: boolean;
    processing?: boolean;
    converting?: boolean;
    live?: boolean;
    upcoming?: boolean;
    is_favourite?: boolean;
    repeat?: boolean;
    width: number;
    height: number;
    can_comment: boolean;
    can_like: boolean;
    can_repost: boolean;
    can_attach_link: boolean;
    can_subscribe: boolean;
    /** only without callback */
    can_add_to_faves: boolean;
    /** only without callback */
    can_play_in_background?: boolean;
    /** only without callback */
    can_download?: boolean;
    /** only without callback */
    files?: Partial<Record<VideoFilesKey, string>> & {
        failover_host?: string;
    };
    /** only without callback */
    timeline_thumbs?: IVideoTimelineThumbs;
    likes?: Pick<ILikesInfo, 'count' | 'user_likes'>;
    reposts?: IRepostsInfo;
    privacy_view?: IPhotoPrivacy;
    privacy_comment?: IPhotoPrivacy;
    track_code: string;
    response_type?: 'full' | 'min';
    content_restricted?: 1;
    content_restricted_message?: string;
    balance?: number;
    can_dislike?: 1;
    /** Id of the user who uploaded the video if it was uploaded to a group by member */
    user_id?: number;
    restriction?: IVideoRestriction;
}
