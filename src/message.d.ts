import { IVKPhotoDefaultPhotoSizes, IVKKeyboard, IVKGeo, IVKAttachmentList } from '.';

export interface IVKMessage {
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
    attachments?: IVKAttachmentList;
    important?: boolean;
    geo?: IVKGeo;
    payload?: string;
    keyboard?: IVKKeyboard;
    fwd_messages?: IVKMessage[];
    reply_message?: IVKMessage;
    action?: IVKMessageAction;
}

export type TVKMessageActionType = 'chat_photo_update' | 'chat_photo_remove' | 'chat_create' | 'chat_title_update' | 'chat_invite_user' | 'chat_kick_user' | 'chat_pin_message' | 'chat_unpin_message' | 'chat_invite_user_by_link';

export interface IVKMessageAction {
    type: TVKMessageActionType;
    member_id: number;
    text: string;
    email: string;
    photo: IVKPhotoDefaultPhotoSizes;
}
