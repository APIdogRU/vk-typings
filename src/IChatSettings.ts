import type { IChatAcl } from './IChatAcl';
import type { IMessage } from './IMessage';
import type { IPhotoDefaultSizesObject } from './IPhotoDefaultSizesObject';

export interface IChatSettings {
    title: string;
    members_count: number;
    friends_count: number;
    owner_id: number;
    state: 'in' | 'kicked' | 'left';
    active_ids: number[];
    is_group_channel: boolean;
    pinned_message?: IMessage;
    acl: IChatAcl;
    photo: IPhotoDefaultSizesObject;
    permissions: Record<
        'invite' | 'change_info' | 'change_pin' | 'use_mass_mentions' | 'see_invite_link' | 'call' | 'change_admins' | 'change_style',
        'all' | 'owner_and_admins' | 'owner'
    >;
    is_disappearing: boolean;
    is_service: boolean;
}
