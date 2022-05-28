import type { INotification } from './INotification';
import type { IVkApiListExtended } from './IVkApiListExtended';

export interface INotifications extends IVkApiListExtended<INotification> {
    last_viewed: number;
    ttl: number;
}
