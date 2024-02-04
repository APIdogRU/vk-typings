import type { IAudioAds } from './IAudioAds';
import type { IAudioAlbum } from './IAudioAlbum';
import type { IAudioArtist } from './IAudioArtist';

export interface IAudio {
    owner_id: number;
    id: number;
    access_key?: string;
    artist: string;
    title: string;
    duration: number;
    url: string;
    lyrics_id?: number;
    /** @deprecated возможно */
    album_id?: number;
    genre_id?: number;
    date?: number;
    no_search?: 0 | 1;
    is_hq?: boolean;
    content_restricted?: boolean;
    ads?: IAudioAds;
    is_licensed?: boolean;
    album?: IAudioAlbum;
    is_explicit?: boolean;
    is_focus_track?: boolean;
    main_artists?: IAudioArtist[];
    short_videos_allowed?: false;
    stories_cover_allowed?: boolean;
    stories_allowed?: false;
    release_audio_id?: string;
}
