import type { ILikesInfo } from './ILikesInfo';
import type { IPhotoSize, IPhotoSizeRequireSource, IPhotoSizeRequireType } from './IPhotoSize';
import type { IRepostsInfo } from './IRepostsInfo';

export interface IPhoto {
    owner_id: number;
    id: number;
    access_key?: string;
    album_id: number;
    /** Только при owner_id < 0 */
    user_id?: number;
    text: string;
    date: number;
    sizes: Array<IPhotoSizeRequireType<IPhotoSizeRequireSource<IPhotoSize, 'url'>>>;
    width?: number;
    height?: number;
    has_tags?: boolean;
    /** Только при extended=1 */
    can_comment?: boolean;
    can_repost?: boolean;
    can_be_owner_photo?: boolean; // 01
    lat?: number;
    long?: number;
    orig_photo?: Omit<IPhotoSizeRequireSource<IPhotoSize, 'url'>, 'type'>;
    comments?: {
        count: number;
    };
    tags?: {
        count: number;
    };
    likes: ILikesInfo;
    reposts: IRepostsInfo;
}
