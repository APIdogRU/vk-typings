import { IAccount, IPhoto } from './index';

export interface INotifications {
    count: number;
    items: INotification[];
    profiles: IAccount[];
    groups: IAccount[];
    photos: IPhoto[];
    ttl: number;
    last_viewed: number;
}

export type INotification = INotificationNew | INotificationLegacy;

export interface INotificationNew {
    action: INotificationNewAction;
    additional_item: {
        action: INotificationNewAction;
        object_id: string;
        type: string;
    };
    date: number;
    header: string;
    footer: string;
    icon_type: 'new_post' | 'like';
    id: string;
    main_item: {
        object_id: string;
        type: 'user' | 'group';
    };
}

export interface INotificationNewAction {
    type: 'custom';
    url: string;
}

export interface INotificationLegacy {
    date: number;
    type: string;
}

