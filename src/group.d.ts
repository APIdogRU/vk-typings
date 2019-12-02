import { IVKCity } from "./city";
import { IVKPlace } from "./geo";
import { IVKPhoto } from ".";

export enum TVKGroupType {
    GROUP = 'group',
    PAGE = 'page',
    EVENT = 'event'
}

export enum TVKGroupCloseStatus {
    OPEN = 0,
    CLOSED = 1,
    PRIVATE = 2
}

export enum TVKGroupAdminLevel {
    MODERATOR = 1,
    EDITOR = 2,
    ADMINISTRATOR = 3
}

export enum TVKGroupAgeLimits {
    NOT_SPECIFIED = 1,
    UP_16 = 2,
    UP_18 = 3
}

export interface TVKGroupBanInfo {
    end_date: number;
    comment: string;
}

export interface IVKGroupContact {
    user_id?: number;
    desc?: string;
    phone?: string;
    email?: string;
}

export type IVKGroupCounters = Partial<{
    photos?: number;
    albums?: number;
    audios?: number;
    videos?: number;
    topics?: number;
    docs?: number;
}>;

export interface IVKGroupCover {
    enabled: boolean;
    images: {
        url: string;
        width: number;
        height: number;
    }[];
}

export interface IVKGroupLink {
    id: number;
    url: string;
    name: string;
    desc?: string;
    photo_50?: string;
    photo_100?: string;
}

export enum TVKGroupMainSection {
    NOT_SPECIFIED = 0,
    PHOTOS = 1,
    TOPICS = 2,
    AUDIOS = 3,
    VIDEOS = 4,
    MARKET = 5
}

export enum TVKGroupMemberStatus {
    NOT_MEMBER = 0,
    MEMBER = 1,
    NOT_SURE = 2,
    REJECTED_INVITE = 3,
    INVITE_SENT = 4,
    INVITED = 5
}

export enum TVKGroupWallType {
    DISABLED = 0,
    OPEN = 1,
    LIMITED = 2,
    CLOSED = 3
}

export interface IVKGroup {
    id: number;
    name: string;
    screen_name: string;
    is_closed: TVKGroupCloseStatus;
    deactivated: 'deleted' | 'banned';
    is_admin?: boolean;
    admin_level?: TVKGroupAdminLevel;
    is_member?: boolean;
    is_advertiser?: boolean;
    invited_by?: number;
    type: TVKGroupType;
    photo_50: string;
    photo_100: string;
    photo_200: string;

    activity?: string;
    age_limits?: TVKGroupAgeLimits;
    ban_info?: TVKGroupBanInfo;
    can_create_topic?: boolean;
    can_message?: boolean;
    can_post?: boolean;
    can_see_all_posts?: boolean;
    can_upload_doc?: boolean;
    can_upload_video?: boolean;
    city?: IVKCity;
    contacts?: IVKGroupContact[];
    counters?: IVKGroupCounters;
    country?: IVKCity;
    cover?: IVKGroupCover;
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
    description?: string;
    fixed_post?: number;
    has_photo?: boolean;
    is_favorite?: boolean;
    is_hidden_from_feed?: boolean;
    is_messages_blocked?: boolean;
    links?: IVKGroupLink[];
    main_album_id?: number;
    main_section?: TVKGroupMainSection;
    // market
    member_status?: TVKGroupMemberStatus;
    members_count?: number;
    place: IVKPlace;
    public_date_label?: string;
    site?: string;
    start_date?: string;
    finish_date?: string;
    status?: string;
    trending?: boolean;
    verified?: boolean;
    wall?: TVKGroupWallType;
    wiki_page?: string;
}
