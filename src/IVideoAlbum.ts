import type { IVideoImage } from './IVideoImage';

export interface IVideoAlbum {
    response_type?: 'full' | 'min';
    owner_id: number;
    id: number;
    title: string;
    count: number;
    updated_time?: number;
    image: IVideoImage[];
    is_system?: 1;
    image_blur?: 1;
    can_edit?: 1;
    can_delete?: 1;
    can_upload?: 1;
}
