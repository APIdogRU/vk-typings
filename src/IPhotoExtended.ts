import type { IPhoto } from './IPhoto';
import type { IPhotoSize, IPhotoSizeRequireSource } from './IPhotoSize';

export interface IPhotoExtended extends IPhoto {
    can_comment: 0 | 1;
    can_repost?: 0 | 1;
    can_be_owner_photo?: 0 | 1;
    orig_photo?: Omit<IPhotoSizeRequireSource<IPhotoSize, 'url'>, 'type'>;
    likes: {
        count: number;
        user_likes: 0 | 1;
    };
    comments: {
        count: number;
    };
    reposts: {
        count: number;
    };
    tags?: {
        count: number;
    };
}
