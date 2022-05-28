import type { IGroup } from './IGroup';
import type { IUser } from './IUser';

export interface ISearchHintProfile {
    type: 'profile';
    profile: IUser;
    section: 'correspondents' | 'people' | 'friends' | 'mutual_friends';
    description?: string;
    global?: 1;
}

export interface ISearchHintGroup {
    type: 'group';
    group: IGroup;
    section: 'groups' | 'events' | 'publics';
    description?: string;
    global?: 1;
}

export type ISearchHint =
    | ISearchHintProfile
    | ISearchHintGroup;