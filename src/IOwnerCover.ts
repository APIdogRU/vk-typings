import type { IOwnerCoverImage } from './IOwnerCoverImage';

export interface IOwnerCover {
    enabled: 0 | 1;

    /** images может отсутствовать при enabled=1!!! */
    images?: IOwnerCoverImage[];
}
