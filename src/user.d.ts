import { IVKCity } from "./city";
import { IVKPhoto } from "./photo";

export enum TVKUserCanSendFriendRequest {
    WILL_BE_NOT_NOTIFIED = 0,
    WILL_BE_NOTIFIED = 1
}

export type IVKUserCounters = Partial<{
    albums: number;
    videos: number;
    audios: number;
    photos: number;
    notes: number;
    friends: number;
    groups: number;
    online_friends: number;
    mutual_friends: number;
    user_videos: number;
    followers: number;
    pages: number;
}>;

export enum TVKUserFriendStatus {
    NOT_FRIEND = 0,
    HAS_OUTCOMING_REQUEST = 1,
    HAS_INCOMING_REQUEST = 2,
    FRIEND = 3
}

export interface IVKUserLastSeen {
    time: number;
    platform: TVKUserLastSeenPlatform;
}

export enum TVKUserLastSeenPlatform {
    MOBILE = 1,
    IPHONE = 2,
    IPAD = 3,
    ANDROID = 4,
    WINDOWS_PHONE = 5,
    WINDOWS_10 = 6,
    WEB = 7
}

export interface IVKUserRelative {
    id?: number;
    name?: string;
    type: 'child' | 'sibling' | 'parent' | 'grandparent' | 'grandchild';
}

export enum TVKUserRelation {
    NOT_SPECIFIED = 0,
    SINGLE = 1,
    IN_RELATIONSHIP = 2,
    ENGAGED = 3,
    MARRIED = 4,
    COMPLICATED = 5,
    SEARCHING = 6,
    IN_LOVE = 7,
    IN_CIVIL_UNION = 8
}

export enum TVKUserSex {
    NOT_SPECIFIED = 0,
    FEMALE = 1,
    MALE = 2
}

export interface IVKUser {
    id: number;
    first_name: string;
    last_name: string;
    deactivated?: 'deleted' | 'banned';
    is_closed: boolean;
    can_access_closed: boolean;

    about?: string;
    activities?: string;
    bdate?: string;
    blacklisted?: boolean;
    blacklisted_by_me?: boolean;
    books?: string;
    can_post?: boolean;
    can_see_audio?: boolean;
    can_send_friend_request?: TVKUserCanSendFriendRequest;
    // career: object;
    city?: IVKCity;
    common_count?: number;
    
    // connections
    skype?: string;
    facebook?: string;
    twitter?: string;
    livejournal?: string;
    instagram?: string;
    
    // contacts
    mobile_phone?: string;
    home_phone?: string;

    counters: IVKUserCounters;

    country: IVKCity;
    crop_photo?: {
        photo: IVKPhoto;
        crop: {
            x: number;
            y: number;
            x2: number;
            y2: number;
        };
        rect: {
            x: number;
            y: number;
            x2: number;
            y2: number;
        }
    };
    domain?: string;

    // education
    university?: number;
    university_name?: string;
    faculty?: number;
    faculty_name?: string;
    graduation?: number;

    // exports?
    
    first_name_nom?: string;
    last_name_nom?: string;
    first_name_gen?: string;
    last_name_gen?: string;
    first_name_dat?: string;
    last_name_dat?: string;
    first_name_acc?: string;
    last_name_acc?: string;
    first_name_ins?: string;
    last_name_ins?: string;
    first_name_abl?: string;
    last_name_abl?: string;

    followers_count?: number;
    friend_status?: TVKUserFriendStatus;
    games?: string;
    has_mobile?: boolean;
    has_photo?: boolean;
    home_town?: string;
    interests?: string;
    is_favorite?: boolean;
    is_friend?: boolean;
    is_hidden_from_feed?: boolean;
    last_seen?: IVKUserLastSeen;
    lists?: number[];
    maiden_name?: string;
    // military
    movies?: string;
    music?: string;
    nickname?: string;
    // occupation
    online?: boolean;
    online_mobile?: boolean;
    online_app?: number;

    // personal

    photo_50?: string;
    photo_100?: string;
    photo_200?: string;
    photo_200_orig?: string;
    photo_400_orig?: string;
    photo_id?: string;
    photo_max?: string;
    photo_max_orig?: string;
    quotes?: string;
    relatives?: IVKUserRelative[];
    relation?: TVKUserRelation;
    // schools: []
    screen_name?: string;
    sex?: TVKUserSex;
    site?: string;
    status?: string;
    timezone?: number;
    trending?: boolean;
    tv?: string;
    // universities
    verified?: boolean;
    wall_default?: 'owner' | 'all';
}
