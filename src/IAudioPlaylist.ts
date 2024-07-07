import type { IAudio } from './IAudio';
import type { IAudioAlbumThumb } from './IAudioAlbumThumb';
import type { IAudioArtist } from './IAudioArtist';
import type { IAudioGenre } from './IAudioGenre';
import type { IAudioPlaylistPermissions } from './IAudioPlaylistPermissions';

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
    thumbs?: IAudioAlbumThumb[];
    // meta?: {
    //     view: 'compact';
    // };
    year?: number;
    is_explicit?: boolean;

    is_following?: boolean;
    audios?: IAudio[];
    main_artists?: IAudioArtist[];
    photo?: IAudioAlbumThumb;
    permissions?: IAudioPlaylistPermissions;
    subtitle_badge?: boolean;
    play_button?: boolean;
    exclusive?: boolean;
}
