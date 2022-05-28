import type { IPhoto } from './IPhoto';
import type { IPhotoPrivacy } from './IPhotoPrivacy';
import type { IPhotoSize } from './IPhotoSize';

export interface IPhotoAlbum {
    owner_id: number;
    id: number;
    access_key?: string;
    title: string;
    description: string;
    created: number;
    updated: number;
    size: number;
    thumb_id?: number;
    thum_is_last?: 0 | 1;
    privacy_view: IPhotoPrivacy;
    privacy_comment: IPhotoPrivacy;
    /** Только в альбомах сообщества */
    can_upload?: boolean;
    /** Только в альбомах сообщества */
    upload_by_admins_only?: boolean;
    /** Только в альбомах сообщества */
    comments_disabled?: boolean;
    /** С need_covers=1, без photo_sizes=1 */
    thumb_src?: string;
    /** С need_covers=1 и photo_sizes=1 */
    sizes?: IPhotoSize[];
    /** Если альбом - это прикрепление */
    thumb?: IPhoto;
}
