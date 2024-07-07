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
    album_id?: number;
    title: string;
    description: string;

    /** Отсутствует у удалённых */
    duration?: number;

    first_frame?: IVideoImage[];
    image?: IVideoImage[];
    date: number;
    adding_date?: number;
    views: number;
    local_views?: number;
    spectators?: number;
    comments: number;
    player?: string;
    platform?: string;
    can_add: 0 | 1;
    can_edit?: 0 | 1;
    can_edit_privacy?: 0 | 1;
    can_delete?: 0 | 1;
    can_be_pinned?: boolean;
    is_private?: boolean;
    is_pinned?: boolean;
    processing?: boolean;
    converting?: boolean;
    live?: boolean;
    upcoming?: boolean;
    is_favorite?: boolean;
    is_author?: boolean;
    repeat?: boolean;
    added?: 0 | 1;
    width?: number;
    height?: number;
    can_comment: 0 | 1;
    can_like: 0 | 1;
    can_repost: 0 | 1;
    can_attach_link?: 0 | 1;
    can_subscribe?: 0 | 1;
    /** only without callback */
    can_add_to_faves: 0 | 1;
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
    response_type?: 'full' | 'min';
    content_restricted?: 1;
    content_restricted_message?: string;
    balance?: number;
    can_dislike?: 1;
    /** Id of the user who uploaded the video if it was uploaded to a group by member */
    user_id?: number;
    restriction?: IVideoRestriction;
}
