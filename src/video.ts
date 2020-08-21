import { IPhotoPrivacy, IPhotoSize } from './photo';
import { IMedia } from './media';

export interface IVideo extends IMedia {
    title: string;
    description: string;
    duration: number;
    first_frame: IPhotoSize[];
    image: IPhotoSize[];
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
    files?: Partial<Record<VideoFilesKey, string>>;
    likes: {
        count: number;
        user_likes: boolean;
    };
    reposts: {
        count: number;
        user_reposted: boolean;
    };
    privacy_view?: IPhotoPrivacy;
    privacy_comment?: IPhotoPrivacy;
}

export type VideoFilesMp4 = 'mp4_240' | 'mp4_360' | 'mp4_480' | 'mp4_720' | 'mp4_1080';
export type VideoFilesKey = VideoFilesMp4 | 'external' | 'hls';

export interface IVideoAlbum extends IMedia {
    count: number;
    title: string;
    updated_time?: number;
    image: IPhotoSize[];
}

export interface IVideoSection {
    id: string;
    name: string;
    total_count: number;
    blocks: IVideoSectionBlock[];
}

export interface IVideoSectionBlock {
    title: string;
    block_layout: 'slider' | 'large_list' | 'list';
    page_layout: 'list';
    type: 'videos' | 'action' | 'albums'
    videos: IVideo[];
    albums: IVideoAlbum[];
}
