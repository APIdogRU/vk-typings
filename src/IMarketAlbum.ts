import type { IPhoto } from './IPhoto';

export interface IMarketAlbum {
    owner_id: number;
    id: number;
    title: string;
    is_main: boolean;
    is_hidden: boolean;
    photo: IPhoto;
    count: number;
}
