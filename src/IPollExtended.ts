import type { IGroup } from './IGroup';
import type { IPoll } from './IPoll';
import type { IUser } from './IUser';

export interface IPollExtended extends IPoll {
    profiles: IUser[];
    groups: IGroup[];
}
