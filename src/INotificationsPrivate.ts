import type { INotificationPrivate } from './INotificationPrivate';
import type { IPhoto } from './IPhoto';
import type { IVideo } from './IVideo';
import type { IVkApiListExtended } from './IVkApiListExtended';

export interface INotificationsPrivate extends IVkApiListExtended<INotificationPrivate> {
    last_viewed: number;
    photos?: IPhoto[];
    vidoes?: IVideo[];
    next_from: string;
    ttl: number;
}
