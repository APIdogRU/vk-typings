import type { IAudio } from './IAudio';
import type { ICity } from './ICity';
import type { ICountry } from './ICountry';
import type { IPhoto } from './IPhoto';
import type { IUniversityItem } from './IUniversityItem';
import type { IUserCounters } from './IUserCounters';
import type { IUserOnlineInfo } from './IUserOnlineInfo';
import type { IUserRelative } from './IUserRelative';

export interface IUser extends Partial<IUserNameCases>, Partial<IUserPhotoSizeObject>, IUserOnline, Partial<IUserExtended> {
    id: number;
    first_name: string;
    last_name: string;
    deactivated?: 'deleted' | 'banned';
    is_closed?: boolean;
    can_access_closed?: boolean;
}

type UserNameCase = 'nom' | 'gen' | 'dat' | 'acc' | 'ins' | 'abl';
type IUserNameCases = Record<`first_name_${UserNameCase}` | `last_name_${UserNameCase}`, string>;

interface IUserPhotoSizeObject {
    photo_50?: string;
    photo_100?: string;
    photo_200?: string;
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
    sex: number;
    can_write_private_message: boolean;
    maiden_name: string;
    friend_status: number;
    blacklisted: boolean;
    blacklisted_by_me: boolean;
    screen_name: string;
    verified: boolean;
    lists: number[];
    bdate: string;
    is_favorite: boolean;
    last_seen: IUserLastSeen;
    crop_photo: IUserCropPhoto;
    nickname: string;
    country: ICountry;
    city: ICity;
    status: string;
    mobile_phone: string;
    home_phone: string;
    home_town: string;
    can_see_gifts: boolean;
    counters: IUserCounters;
    common_count: number;
    relatives: IUserRelative[];
    facebook_name: string;
    facebook: string;
    instagram: string;
    twitter: string;
    site: string;
    skype: string;
    livejournal: string;
    universities: IUniversityItem[];
    relation: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
    relation_partner: {
        id: number;
        first_name: string;
        last_name: string;
    };
    status_audio: IAudio;
    activity: string;
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
