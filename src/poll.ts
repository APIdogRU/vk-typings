import { IPhoto, IPhotoSize } from './photo';
import { IGroup, IUser } from './index';
import { IMedia } from './media';

type IPollFriendVote = {
    id: number;
};

export interface IPoll extends IMedia {
    votes: number;
    answer_ids?: number[];
    question: string;
    created: number;
    answers: IPollAnswer[];
    anonymous: boolean;
    multiple: boolean;
    end_date?: number;
    closed?: boolean;
    is_board?: boolean;
    can_edit?: boolean;
    can_vote?: boolean;
    can_repost?: boolean;
    can_share?: boolean;
    author_id?: boolean;
    disable_unvote?: boolean;
    photo?: IPhoto;
    background?: IPollBackground;
    friends?: IPollFriendVote[];
}

export interface IPollExtended extends IPoll {
    profiles: IUser[];
    groups: IGroup[];
}

export interface IPollAnswer {
    id: number;
    text: string;
    votes: number;
    rate: number;
}

export interface IPollBackground {
    id: number;
    type: 'gradient' | 'tile';
    name: string;
    angle?: number;
    color: string;
    width?: number;
    height?: number;
    images?: IPhotoSize[];
    points?: IPollBackgroundPoint[];
}

export interface IPollBackgroundPoint {
    position: number;
    color: string;
}
