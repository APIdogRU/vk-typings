import type { IAttachments } from './IAttachments';

export interface IConversationHistoryAttachment {
    message_id: number;
    from_id: number;
    attachment: IAttachments;
}
