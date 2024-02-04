import type { IPhotoSize, IPhotoSizeRequireSource, IPhotoSizeRequireType } from './IPhotoSize';

export interface IPhoto {
    owner_id: number;
    id: number;
    access_key?: string;
    album_id: number;
    /** Только при owner_id < 0 */
    user_id?: number;
    /** Если фотку постили на стену */
    post_id?: number;
    text: string;
    date: number;
    sizes: Array<IPhotoSizeRequireType<IPhotoSizeRequireSource<IPhotoSize, 'url'>>>;
    has_tags: boolean;
    lat?: number;
    long?: number;
    web_view_token?: string;
}
