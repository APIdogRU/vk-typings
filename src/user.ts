import { IPhoto } from './photo';
import { ICity, ICountry } from './common';
import { IAudio } from './audio';

export interface IUser extends IUserNameCases, IUserPhotos, IUserOnline, IUserExtended {
    id: number;
    first_name: string;
    last_name: string;
    deactivated?: 'deleted' | 'banned';
    is_closed?: boolean;
    can_access_closed?: boolean;
}

type IUserNameCases = Partial<{
    first_name_nom: string;
    last_name_nom: string;
    first_name_gen: string;
    last_name_gen: string;
    first_name_dat: string;
    last_name_dat: string;
    first_name_acc: string;
    last_name_acc: string;
    first_name_ins: string;
    last_name_ins: string;
    first_name_abl: string;
    last_name_abl: string;
}>;

export type UserNameCase = keyof IUserNameCases;

type IUserPhotos = Partial<{
    photo_50?: string;
    photo_100?: string;
    photo_200?: string;
    photo_200_orig?: string;
    photo_400_orig?: string;
    photo_id?: string;
    photo_max?: string;
    photo_max_orig?: string;
}>;

interface IUserOnline {
    online?: boolean;
    online_info?: IUserOnlineInfo;
}

export interface IUserOnlineInfo {
    visible: boolean;
    last_seen?: number;
    app_id?: number;
    is_online?: number;
    is_mobile?: number;
}

type IUserExtended = Partial<{
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
}>;

type IUserLastSeen = {
    time: number;
    platform?: number;
};

type IUserCropPhotoCoords = {
    x: number;
    y: number;
    x2: number;
    y2: number;
};

type IUserCropPhoto = {
    photo: IPhoto;
    crop: IUserCropPhotoCoords;
    rect: IUserCropPhotoCoords;
};

export type IUserCounters = Partial<{
    albums: number;
    videos: number;
    audios: number;
    photos: number;
    groups: number;
    gifts: number;
    friends: number;
    online_friends: number;
    mutual_friends: number;
    posts: number;
    user_photos: number;
    followers: number;
    subscriptions: number;
    pages: number;
    clips_followers: number;
}>;

export type IUserRelative = {
    id?: number;
    name?: string;
    type: 'child' | 'sibling' | 'parent' | 'grandparent' | 'grandchild';
};

export type IUniversityItem = {
    id: number;
    country: number
    city: number; // id
    name: string;
    faculty: number; // id
    faculty_name: string;
    chair: number; // id
    chair_name: string;
    graduation: number;
    education_form: string;
    education_status: string;
};

export type ISchoolItem = {
    id: string; // id
    country: number; // id
    city: number; // id
    name: string;
    year_from: number;
    year_to: number;
    year_graduated: number;
    class: string;
};
