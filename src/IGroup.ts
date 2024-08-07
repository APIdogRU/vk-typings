import type { IAccountPhotoSize } from './IAccountPhotoSize';
import type { IAudio } from './IAudio';
import type { ICity } from './ICity';
import type { ICountry } from './ICountry';
import type { IGroupBanInfo } from './IGroupBanInfo';
import type { IGroupContact } from './IGroupContact';
import type { IGroupCounters } from './IGroupCounters';
import type { IOwnerCover } from './IOwnerCover';
import type { IGroupCropPhoto } from './IGroupCropPhoto';
import type { IGroupLink } from './IGroupLink';
import type { IPlace } from './IPlace';
import type { IGroupMainAddress } from './IGroupMainAddress';

/** Тип сообщества */
export type GroupType = 'group' | 'page' | 'event';

/** Закрытость группы: 0 - открытая, 1 - закрытая, 2 - приватная */
export type GroupCloseStatus = 0 | 1 | 2;

/** Уровень админства текущего пользователя в сообществе: 1 - модератор, 2 - редактор, 3 - администратор */
export type GroupAdminLevel = 1 | 2 | 3;

/** Возрастные ограничения: 1 - не указано, 2 - 16+, 3 - 18+ */
export type GroupAgeLimits = 1 | 2 | 3;

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

export interface IGroup extends IAccountPhotoSize {
    id: number;
    name: string;
    screen_name: string;
    is_closed: GroupCloseStatus;
    deactivated?: 'deleted' | 'banned';
    is_admin?: 0 | 1;
    admin_level?: GroupAdminLevel;
    is_member?: 0 | 1;
    is_advertiser?: 0 | 1;
    invited_by?: number;
    type: GroupType;

    activity?: string;
    age_limits?: GroupAgeLimits;
    ban_info?: IGroupBanInfo;
    can_create_topic?: boolean;
    can_message?: boolean;
    can_post?: boolean;
    can_suggest?: boolean;
    can_see_all_posts?: boolean;
    can_upload_doc?: boolean;
    can_upload_story?: boolean;
    can_upload_video?: boolean;
    country?: ICountry;
    city?: ICity;
    contacts?: IGroupContact[];
    counters?: IGroupCounters;
    cover?: IOwnerCover;
    crop_photo?: IGroupCropPhoto;
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
    online_status?: IGroupOnlineStatus;
    addresses?: IGroupMainAddress;
}

export interface IGroupOnlineStatus {
    status: 'online' | 'none';
}
