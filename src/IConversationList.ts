import type { IConversationItem } from './IConversationItem';
import type { IVkApiListExtended } from './IVkApiListExtended';

export interface IConversationList extends IVkApiListExtended<IConversationItem> {
    unread_count: number;
}
