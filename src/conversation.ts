import { IChatAccess, IChatSettings } from './chat';
import { IKeyboard } from './keyboard';

export interface IPeer {
    id: number;
    type: 'user' | 'chat' | 'group' | 'email';
    local_id: number;
}

export interface IConversation {
    peer: IPeer;
    in_read: number;
    out_read: number;
    last_message_id: number;
    unread_count: number;
    important?: boolean;
    unanswered?: boolean;
    push_settings?: IPushSettings;
    can_write: IChatAccess;
    current_keyboard?: IKeyboard;
    chat_settings?: IChatSettings;
    is_marked_unread?: boolean;
}

export interface IPushSettings {
    peer_id: number;
    disabled_until: number;
    disabled_forever: boolean;
    no_sound: boolean;
}
