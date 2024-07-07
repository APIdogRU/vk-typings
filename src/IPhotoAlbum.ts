import type { IPhoto } from './IPhoto';
import type { IPhotoPrivacy } from './IPhotoPrivacy';
import type { IPhotoSize, IPhotoSizeRequireSource, IPhotoSizeRequireType } from './IPhotoSize';

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
    can_delete: boolean;
    can_include_to_feed: boolean;
    feed_disabled: 0 | 1;
    feed_has_pinned: 0 | 1;

    thumb_is_last?: 0 | 1;
    privacy_view?: IPhotoPrivacy;
    privacy_comment?: IPhotoPrivacy;
    is_locked?: boolean;

    /** Только в альбомах сообщества */
    can_upload?: boolean;
    /** Только в альбомах сообщества */
    upload_by_admins_only?: 0 | 1;
    /** Только в альбомах сообщества */
    comments_disabled?: 0 | 1;
    /** С need_covers=1, без photo_sizes=1 */
    thumb_src?: string;
    /** С need_covers=1 и photo_sizes=1 */
    sizes?: Array<IPhotoSizeRequireType<IPhotoSizeRequireSource<IPhotoSizeRequireSource<IPhotoSize, 'src'>, 'url'>>>;
    /** Если альбом - это прикрепление */
    thumb?: IPhoto;
}
