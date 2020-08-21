import { IAttachmentList } from './attachment';
import { IGeo } from './geo';
import { IKeyboard } from './keyboard';
import { IPhotoDefaultPhotoSizes } from './photo';

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
    attachments?: IAttachmentList;
    important?: boolean;
    geo?: IGeo;
    payload?: string;
    keyboard?: IKeyboard;
    fwd_messages?: IMessage[];
    reply_message?: IMessage;
    action?: IMessageAction;
    update_time?: number;
    is_hidden?: boolean;
}

export type MessageActionType = 'chat_photo_update' | 'chat_photo_remove' | 'chat_create' | 'chat_title_update' | 'chat_invite_user' | 'chat_kick_user' | 'chat_pin_message' | 'chat_unpin_message' | 'chat_invite_user_by_link' | 'chat_screenshot';

export interface IMessageAction {
    type: MessageActionType;
    member_id: number;
    text: string;
    email: string;
    photo: IPhotoDefaultPhotoSizes;
}
