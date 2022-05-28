import type { IUser } from './IUser';
import type { IGroup } from './IGroup';
import type { IVkApiList } from './IVkApiList';

export interface IVkApiListExtended<T> extends IVkApiList<T> {
    profiles: IUser[];
    groups: IGroup[];
}
