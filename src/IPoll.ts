import type { IPhoto } from './IPhoto';
import type { IPollAnswer } from './IPollAnswer';
import type { IPollBackground } from './IPollBackground';

export interface IPoll {
    owner_id: number;
    id: number;
    multiple: boolean;
    end_date?: number;
    closed?: boolean;
    is_board?: boolean;
    can_edit?: boolean;
    can_vote?: boolean;
    can_repost?: boolean;
    can_share?: boolean;
    created: number;
    question: string;
    votes: number;
    disable_unvote?: boolean;
    anonymous: boolean;
    answer_ids?: number[];
    answers: IPollAnswer[];
    author_id?: number;
    photo?: IPhoto;
    background?: IPollBackground;
    friends?: { id: number }[];
}
