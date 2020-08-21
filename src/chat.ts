import { IMessage } from './message';
import { IPhotoDefaultPhotoSizes } from './photo';

export interface IChatAccess {
    allowed: boolean;
    reason?: number;
}

export interface IChatSettings {
    members_count: number;
    title: string;
    pinned_message?: IMessage;
    state: 'in' | 'kicked' | 'left';
    acl: IChatAcl;
    photo: IPhotoDefaultPhotoSizes;
    active_ids: number[];
    is_group_channel: boolean;
}

export interface IChatAcl {
    can_change_info: boolean;
    can_change_invite_link: boolean;
    can_change_pin: boolean;
    can_invite: boolean;
    can_promote_users: boolean;
    can_see_invite_link: boolean;
    can_moderate: boolean;
    can_copy_chat: boolean;
}

export interface IChatMember {
    member_id: number;
    invited_by: number;
    join_date: number;
    is_admin?: boolean;
    is_owner?: boolean;
}
