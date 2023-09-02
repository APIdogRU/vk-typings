export interface IUserOnlineInfo_visible_yes {
    visible: true;
    last_seen?: number;
    app_id?: number;
    is_online?: boolean;
    is_mobile?: boolean;
}

export interface IUserOnlineInfo_visible_no {
    visible: false;
    status: 'recently' | 'last_week' | 'last_month' | 'long_ago' | 'not_show';
}

/**
 * https://github.com/VKCOM/vk-api-schema/blob/ff08ec8436250434e64ae93bd27fa7da2a009324/users/objects.json#L274C13-L313
 */
export type IUserOnlineInfo = IUserOnlineInfo_visible_yes | IUserOnlineInfo_visible_no;
