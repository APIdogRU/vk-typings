import type { IAudioAlbumThumb } from './IAudioAlbumThumb';

/** Альбом исполнителя */
export interface IAudioAlbum {
    owner_id: number;
    id: number;
    access_key: string;
    title: string;
    thumb: IAudioAlbumThumb;
}
