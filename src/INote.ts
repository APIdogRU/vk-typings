export interface INote {
    owner_id: number;
    id: number;
    title: string;
    /** Wiki-разметка */
    text: string;
    date: number;
    /** Количество комментариев */
    comments: number;
    /** Количество прочтённых комментариев */
    read_comments: number;
    can_comment: 0 | 1;
    view_url: string;

    // legacy
    user_id?: number; // -> owner_id
    ncom?: number; // -> comments
}
