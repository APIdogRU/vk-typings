export interface ICommentsInfo {
    can_post: 0 | 1;
    can_close?: 0 | 1;
    count: number;
    can_view?: 0 | 1;
    groups_can_post?: boolean;
}
