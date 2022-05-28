/** Абсолютно неточный тип */
export interface INotificationPrivate {
    /** Идентификатор новости */
    id: string;
    /** Дата новости */
    date: number;
    /** Кто инициатор новости */
    main_item: {
        type: 'user' | 'group';
        object_id: string; // Хотя здесь число в строке
    };
    action_buttons?: {
        right: {
            label: string;
            action: INotificationPrivateActionHideItem;
        }[];
    };
    /** Тип иконки */
    icon_type: 'new_post' | 'like' | 'custom';
    /** При icon_type=custom */
    icon_url?: string;
    /** Текст в шапке */
    header: string;
    /** Текст в футере */
    footer: string;
    attachments?: {
        type: 'photo' | 'video';
        object_id: string; // OOO_III
        action: INotificationPrivateActionCustom;
    }[];
    buttom_hide?: boolean;
    action?: INotificationPrivateActionCustom;
    additional_item?: {
        action: INotificationPrivateAction;
        object_id: string;
        type: string;
    };
}

interface INotificationPrivateActionBase<T extends string> {
    type: T;
}

export interface INotificationPrivateActionHideItem extends INotificationPrivateActionBase<'hide_item'> {
    context: {
        query: string;
        snackbar_text: string;
    };
    color: 'secondary' | 'warning';
}

export interface INotificationPrivateActionCustom extends INotificationPrivateActionBase<'custom'> {
    url: string;
}

export interface INotificationPrivateActionUngroup extends INotificationPrivateActionBase<'ungroup'> {
    context: {
        query: string;
        header: string;
        group_id: number;
    };
}

export type INotificationPrivateAction =
    | INotificationPrivateActionHideItem
    | INotificationPrivateActionCustom
    | INotificationPrivateActionUngroup
;
