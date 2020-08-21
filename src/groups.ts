import { IPlace } from './geo';
import { IPhoto } from './photo';
import { IAudio } from './audio';
import { ICity, ICountry } from './common';

export const enum GroupType {
    GROUP = 'group',
    PAGE = 'page',
    EVENT = 'event'
}

export const enum GroupCloseStatus {
    OPEN = 0,
    CLOSED = 1,
    PRIVATE = 2
}

export const enum GroupAdminLevel {
    MODERATOR = 1,
    EDITOR = 2,
    ADMINISTRATOR = 3
}

export const enum GroupAgeLimits {
    NOT_SPECIFIED = 1,
    UP_16 = 2,
    UP_18 = 3
}

export interface IGroupBanInfo {
    end_date: number;
    comment: string;
}

export interface IGroupContact {
    user_id?: number;
    desc?: string;
    phone?: string;
    email?: string;
}

export type IGroupCounters = Partial<{
    photos?: number;
    albums?: number;
    audios?: number;
    videos?: number;
    topics?: number;
    docs?: number;
}>;

export interface IGroupCover {
    enabled: boolean;
    images: {
        url: string;
        width: number;
        height: number;
    }[];
}

export interface IGroupLink {
    id: number;
    url: string;
    name: string;
    desc?: string;
    photo_50?: string;
    photo_100?: string;
}

export const enum GroupMainSection {
    NOT_SPECIFIED = 0,
    PHOTOS = 1,
    TOPICS = 2,
    AUDIOS = 3,
    VIDEOS = 4,
    MARKET = 5
}

export const enum GroupMemberStatus {
    NOT_MEMBER = 0,
    MEMBER = 1,
    NOT_SURE = 2,
    REJECTED_INVITE = 3,
    INVITE_SENT = 4,
    INVITED = 5
}

export const enum GroupWallType {
    DISABLED = 0,
    OPEN = 1,
    LIMITED = 2,
    CLOSED = 3
}

export interface IGroup {
    id: number;
    name: string;
    screen_name: string;
    is_closed: GroupCloseStatus;
    deactivated?: 'deleted' | 'banned';
    is_admin?: boolean;
    admin_level?: GroupAdminLevel;
    is_member?: boolean;
    is_advertiser?: boolean;
    invited_by?: number;
    type: GroupType;
    photo_50?: string;
    photo_100?: string;
    photo_200?: string;

    activity?: string;
    age_limits?: GroupAgeLimits;
    ban_info?: IGroupBanInfo;
    can_create_topic?: boolean;
    can_message?: boolean;
    can_post?: boolean;
    can_see_all_posts?: boolean;
    can_upload_doc?: boolean;
    can_upload_video?: boolean;
    city?: ICity;
    contacts?: IGroupContact[];
    counters?: IGroupCounters;
    country?: ICountry
    cover?: IGroupCover;
    crop_photo?: {
        photo: IPhoto;
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
        };
    };
    description?: string;
    fixed_post?: number;
    has_photo?: boolean;
    is_favorite?: boolean;
    is_hidden_from_feed?: boolean;
    is_messages_blocked?: boolean;
    links?: IGroupLink[];
    main_album_id?: number;
    main_section?: GroupMainSection;
    // market
    member_status?: GroupMemberStatus;
    members_count?: number;
    place?: IPlace;
    public_date_label?: string;
    site?: string;
    start_date?: string;
    finish_date?: string;
    status?: string;
    trending?: boolean;
    verified?: boolean;
    wall?: GroupWallType;
    wiki_page?: string;
    status_audio?: IAudio;
}