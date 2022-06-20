import type { IGroupBanInfo } from './IGroupBanInfo';
import type { IGroup } from './IGroup';
import type { IUser } from './IUser';

type IGroupBanItemBase<T extends string, O> = {
    type: T;
    ban_info: IGroupBanInfo;
} & {
    [type in T]: O;
};

export type IGroupBanItem = IGroupBanItemBase<'profile', IUser> | IGroupBanItemBase<'group', IGroup>;
