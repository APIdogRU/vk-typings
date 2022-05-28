import type { IComment } from './IComment';

export interface IPostActivityComments {
    type: 'comments';
    comments: IComment[];
}

export type IPostActivity = IPostActivityComments;
