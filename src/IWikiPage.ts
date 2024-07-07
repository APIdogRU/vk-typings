export interface IWikiPage {
    group_id: number;
    id: number;
    title: string;
    created: number;
    edited: number;
    view_url: string;
    views?: number;
    who_can_edit: number;
    who_can_view: number;
}
