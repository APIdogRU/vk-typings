import { GroupMemberStatus } from './groups';

export interface IEvent {
    button_text: string;
    id: number;
    is_favorite: boolean;
    text: string;
    address: string;
    friends: [];
    member_status: GroupMemberStatus;
    time: number;
}
