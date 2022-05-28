import type { IPhotoDefaultSizesObject } from './IPhotoDefaultSizesObject';

export interface IMessageActionPhotoUpdate {
    type: 'chat_photo_update';
    photo: IPhotoDefaultSizesObject;
}

export interface IMessageActionPhotoRemove {
    type: 'chat_photo_remove';
}

export interface IMessageActionChatCreate {
    type: 'chat_create';
    text: string;
}

export interface IMessageActionTitleUpdate {
    type: 'chat_title_update';
    text: string;
}

export interface IMessageActionInviteUser {
    type: 'chat_invite_user';
    email?: string;
}

export interface IMessageActionKickUser {
    type: 'chat_kick_user';
    email?: string;
}

export interface IMessageActionPinMessage {
    type: 'chat_pin_message';
    member_id?: number;
}

export interface IMessageActionUnpinMessage {
    type: 'chat_unpin_message';
    member_id?: number;
}

export interface IMessageActionInviteUserByLink {
    type: 'chat_invite_user_by_link';
    member_id?: number;
}

export interface IMessageActionScreenshot {
    type: 'chat_screenshot';
    member_id: number;
}

export interface IMessageActionConversationStyleUpdate {
    type: 'conversation_style_update';
    member_id: number;
}

export type IMessageAction =
    | IMessageActionPhotoUpdate
    | IMessageActionPhotoRemove
    | IMessageActionChatCreate
    | IMessageActionTitleUpdate
    | IMessageActionInviteUser
    | IMessageActionKickUser
    | IMessageActionPinMessage
    | IMessageActionUnpinMessage
    | IMessageActionInviteUserByLink
    | IMessageActionScreenshot
    | IMessageActionConversationStyleUpdate;
