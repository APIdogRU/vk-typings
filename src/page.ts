export interface IPage {
    group_id: number;
    id: number;
    title: string;
}

export interface IPageFull extends IPage {
    current_user_can_edit: boolean;
    current_user_can_edit_access: boolean;
    who_can_view: boolean;
    who_can_edit: boolean;
    creator_id: number;
    created: number;
    editor_id: number;
    edited: number;
    views?: number; // нет в версии

    // только в версии
    page_id: number;
    version_created?: number;
}

export interface IPageExtended extends IPageFull {
    source: string;
    html: string;
    view_url: string;
}
