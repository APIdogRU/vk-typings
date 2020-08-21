import { IMedia } from './media';
import { ILikeInfo } from './like';

export interface INote extends IMedia {
    title: string;
    text: string;
    date: number;
    comments: number;
    read_comments: number;
    view_url: string;

    // legacy
    user_id?: number; // -> owner_id
    ncom?: number; // -> comments
}

export interface INoteComment {
    oid: number; // owner id
    nid: number; // note id
    id: number; // comment id
    uid: number; // user id
    date: number;
    message: string;
    reply_to: number;
}
