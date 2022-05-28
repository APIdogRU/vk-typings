import type { IConversation } from './IConversation';
import type { IMessage } from './IMessage';

export interface IConversationItem {
    conversation: IConversation;
    last_message: IMessage;
}
