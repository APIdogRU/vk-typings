import type { IAccountPhotoSize } from './IAccountPhotoSize';
import type { IAudio } from './IAudio';
import type { ICity } from './ICity';
import type { ICountry } from './ICountry';
import type { IOwnerCover } from './IOwnerCover';
import type { IPhoto } from './IPhoto';
import type { IStatusImage } from './IStatusImage';
import type { IUniversityItem } from './IUniversityItem';
import type { IUserCounters } from './IUserCounters';
import type { IUserOnlineInfo } from './IUserOnlineInfo';
import type { IUserRelative } from './IUserRelative';

export interface IUser extends Partial<UserNameCase>, Partial<IUserPhotoSizeObject>, IUserOnline, Partial<IUserExtended> {
    id: number;
    first_name: string;
    last_name: string;
    deactivated?: 'deleted' | 'banned';
    is_closed?: boolean;
    can_access_closed?: boolean;
    is_service?: boolean;
}

type UserNameCaseName = 'nom' | 'gen' | 'dat' | 'acc' | 'ins' | 'abl';
export type UserNameCase = Record<`first_name_${UserNameCaseName}` | `last_name_${UserNameCaseName}`, string>;

interface IUserPhotoSizeObject extends IAccountPhotoSize {
    photo_200_orig?: string;
    photo_400_orig?: string;
    photo_id?: string;
    photo_max?: string;
    photo_max_orig?: string;
}

interface IUserOnline {
    online?: boolean;
    online_info?: IUserOnlineInfo;
}

interface IUserExtended {
    can_post: boolean;
    can_write_private_message: boolean;
    can_see_gifts: boolean;
    can_send_friend_request: boolean;
    can_see_audio: boolean;
    can_invite_to_chats: boolean;
    can_be_invited_group: boolean;
    can_upload_doc: boolean;
    can_ban: boolean;
    can_call: boolean;
    can_see_all_posts: boolean;
    cover?: IOwnerCover;
    service_description: string;
    sex: number;
    maiden_name: string;
    friend_status: FriendStatus;
    blacklisted: boolean;
    blacklisted_by_me: boolean;
    screen_name: string;
    verified: boolean;
    lists: number[];
    bdate: string;
    is_favorite: boolean;
    is_hidden_from_feed: boolean;
    last_seen: IUserLastSeen;
    crop_photo: IUserCropPhoto;
    nickname: string;
    country: ICountry;
    city: ICity;
    status: string;
    image_status: IStatusImage;
    has_mobile: boolean;
    has_unseen_stories: boolean;
    trending: boolean;
    mobile_phone: string;
    home_phone: string;
    home_town: string;
    common_count: number;
    counters: IUserCounters;
    relatives: IUserRelative[];
    facebook_name: string;
    facebook: string;
    instagram: string;
    twitter: string;
    site: string;
    skype: string;
    livejournal: string;
    universities: IUniversityItem[];
    relation: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
    relation_partner: {
        id: number;
        first_name: string;
        last_name: string;
    };
    status_audio: IAudio;
    activity: string;
    wall_comments?: 1;
    wall_default?: 'all' | 'owner';
    is_no_index?: boolean;
}

interface IUserLastSeen {
    time: number;
    platform?: number;
}

interface IUserCropPhotoCoords {
    x: number;
    y: number;
    x2: number;
    y2: number;
}

interface IUserCropPhoto {
    photo: IPhoto;
    crop: IUserCropPhotoCoords;
    rect: IUserCropPhotoCoords;
}

export const enum FriendStatus {
    NOT_A_FRIEND = 0,
    OUTCOMING_REQUEST = 1,
    INCOMING_REQUEST = 2,
    IS_FRIEND = 3,
}
