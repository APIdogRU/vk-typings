export interface IApplication {
    id: number;
    type: 'standalone';
    title: string;
    are_notifications_enabled: boolean;
    author_owner_id: number;
    author_url: string;
    banner_1120: string;
    banner_560: string;
    hide_tabbar: boolean;
    icon_139: string;
    icon_150: string;
    icon_278: string;
    icon_75: string;
    international: boolean;
    is_favorite: boolean;
    is_in_catalog: boolean;
    is_installed: boolean;
    leaderboard_type: number;
    members_count: number;
    open_in_external_browser: boolean;
}

// Legacy
export interface IPostApp {
    id: number;
    name: string;
    photo_130: string;
    photo_604: string;
}
