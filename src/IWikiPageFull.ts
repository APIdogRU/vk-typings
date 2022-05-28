import type { IWikiPage } from './IWikiPage';

export interface IWikiPageFull extends IWikiPage {
    current_user_can_edit: 0 | 1;
    current_user_can_edit_access: 0 | 1;
    who_can_view: 0 | 1 | 2;
    who_can_edit: 0 | 1 | 2;
    creator_id: number;
    created: number;
    editor_id: number;
    edited: number;
    /** Отсутствует в pages.getVersions */
    views?: number;
    /** Присутствует только в pages.getVersions */
    page_id: number;
    version_created?: 0 | 1;
}
