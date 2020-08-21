import { IApiList } from './base';
import { IUser } from './user';
import { IGroup } from './groups';
import { IMessage } from './message';
import { IConversation } from './conversation';
import { IAttachment } from './attachment';

export interface IDialogList extends IApiList<IDialog> {
    unread_count: number;
    profiles: IUser[];
    groups: IGroup[];
}

export interface IDialog {
    conversation: IConversation;
    last_message: IMessage;
}

export interface IDialogAttachmentHistoryItem {
    message_id: number;
    from_id: number;
    attachment: IAttachment<'photo' | 'video' | 'audio' | 'doc' | 'audio_message' | 'link' | 'wall'>;
}
