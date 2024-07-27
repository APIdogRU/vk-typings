import type { IOwnerCoverImage } from './IOwnerCoverImage';

interface IOwnerCoverDisabled {
    enabled: 0;
}

interface IOwnerCoverEnabled {
    enabled: 1;
    images: IOwnerCoverImage[];
}

export type IOwnerCover = IOwnerCoverEnabled | IOwnerCoverDisabled;
