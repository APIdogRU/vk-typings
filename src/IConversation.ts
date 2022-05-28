import type { IChatAccess } from './IChatAccess';
import type { IChatSettings } from './IChatSettings';
import type { IKeyboard } from './IKeyboard';
import type { IPeer } from './IPeer';
import type { IPushSettings } from './IPushSettings';

export interface IConversation {
    peer: IPeer;
    last_message_id: number;
    in_read: number;
    out_read: number;
    last_conversation_message_id: number;
    in_read_cmid: number;
    out_read_cmid: number;
    is_marked_unread?: boolean;
    important?: boolean;
    can_write: IChatAccess;
    can_send_money?: boolean;
    can_receive_money?: boolean;
    chat_settings?: IChatSettings;
    is_new: boolean;

    unread_count: number;
    unanswered?: boolean;
    push_settings?: IPushSettings;
    current_keyboard?: IKeyboard;
}
