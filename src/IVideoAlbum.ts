import type { IVideoImage } from './IVideoImage';

export interface IVideoAlbum {
    owner_id: number;
    id: number;
    title: string;
    count: number;
    updated_time?: number;
    image: IVideoImage[];
    is_system?: 1;
}
