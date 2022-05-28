import type { IGeo } from './IGeo';
import type { IKeyboard } from './IKeyboard';
import type { IAttachments } from './IAttachments';
import type { IMessageAction } from './IMessageAction';

export interface IMessage {
    id: number;
    date: number;
    peer_id: number;
    from_id: number;
    text: string;
    random_id?: number;
    out: boolean;
    conversation_message_id?: number;
    ref?: string;
    ref_source?: string;
    attachments?: IAttachments;
    important?: boolean;
    geo?: IGeo;
    payload?: string;
    keyboard?: IKeyboard;
    fwd_messages?: IMessage[];
    reply_message?: IMessage;
    action?: IMessageAction;
    update_time?: number;
    is_hidden?: boolean;
    admin_author_id?: number;
    is_cropped?: boolean;
    was_listened?: boolean;
    pinned_at?: number;
    message_tag?: string;
    is_expired?: boolean;
    expire_ttl?: number;
}
