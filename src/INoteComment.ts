export interface INoteComment {
    /** owner_id */
    oid: number;
    /** note_id */
    nid: number;
    /** id */
    id: number;
    /** from_id */
    uid: number;
    date: number;
    message: string;
    /** 0, если не ответ */
    reply_to: number;
}
