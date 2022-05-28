import type { ILikesInfo } from './ILikesInfo';
import type { IPhotoSize } from './IPhotoSize';
import type { IRepostsInfo } from './IRepostsInfo';

export interface IPhoto {
    owner_id: number;
    id: number;
    access_key?: string;
    album_id: number;
    user_id: number;
    text: string;
    date: number;
    sizes: IPhotoSize[];
    width?: number;
    height?: number;
    has_tags?: boolean;
    likes: ILikesInfo;
    reposts: IRepostsInfo;
    comments?: {
        count: number;
    };
    can_comment?: boolean;
    can_repost?: boolean;
    lat?: number;
    long?: number;
}
