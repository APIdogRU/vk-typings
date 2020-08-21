import { IMedia } from './media';
import { ILikeInfo } from './like';
import { IRepostInfo } from './repost';

export interface IPhoto extends IMedia {
    album_id: number;
    access_key?: string;
    user_id: number;
    text: string;
    date: number;
    sizes: IPhotoSize[];
    width?: number;
    height?: number;
    has_tags?: boolean;

    likes: ILikeInfo;
    reposts: IRepostInfo;
    comments?: {
        count: number;
    };
    can_comment?: boolean;
    can_repost?: boolean;

    lat?: number;
    long?: number;
}

export type PhotoListType = 's' | 'm' | 'x' | 'o' | 'p' | 'q' | 'r' | 'y' | 'z' | 'w';

export type IPhotoSize<K extends string = 'url'> = {
    [A in K]: string;
} & {
    type: PhotoListType;
    width: number;
    height: number;
};

export interface IPhotoDefaultPhotoSizes {
    photo_50: string;
    photo_100: string;
    photo_200: string;
}

export interface IPhotoAlbum extends IMedia {
    thumb?: IPhoto;
    title: string;
    description: string;
    created: number;
    updated: number;
    size: number;
    can_upload?: boolean;
    sizes?: IPhotoSize<'src'>[];
    privacy_view: IPhotoPrivacy;
    privacy_comment: IPhotoPrivacy;
    upload_by_admins_only?: boolean;
    comments_disabled?: boolean;
}


// Legacy
export interface IPostedPhoto {
    id: number;
    owner_id: number;
    photo_130: string;
    photo_604: string;
}

// Legacy
export interface IPhotoGraffiti {
    id: number;
    owner_id: number;
    photo_130: string;
    photo_604: string;
}

export interface IPhotoPrivacy {
    category?: 'all' | 'friends' | 'friends_of_friends' | 'friends_of_friends_only' | 'only_me';
    owners?: IPhotoPrivacyBlock;
    lists?: IPhotoPrivacyBlock;
}

export interface IPhotoPrivacyBlock {
    allowed?: number[];
    excluded?: number[];
}
