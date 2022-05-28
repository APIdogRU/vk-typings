import type { IAudioAlbumThumb } from './IAudioAlbumThumb';
import type { IAudioGenre } from './IAudioGenre';

export interface IAudioPlaylist {
    owner_id: number;
    id: number;
    access_key: string;
    type: number; // 0 | 1
    title: string;
    description: string;
    count: number;
    followers: number;
    plays: number;
    create_time: number;
    update_time: number;
    genres: IAudioGenre[];
    album_type: 'playlist' | 'main_only';
    thumbs: IAudioAlbumThumb[];
    // meta?: {
    //     view: 'compact';
    // };
    // audios?: IAudio[];
    year?: number;
    // photo: IAudioAlbumThumb;
    is_explicit?: boolean;
    // main_artists?: IAudioArtist[];
}
