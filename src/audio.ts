import { IMedia } from './media';

export interface IAudio extends IMedia {
    artist: string;
    title: string;
    duration: number;
    url: string;
    lyrics_id?: number;
    album_id?: number;
    genre_id?: number;
    date?: number;
    no_search?: boolean;
    is_hq?: boolean;
    content_restricted?: boolean;
    ads?: {
        content_id: string;
        duration: string;
        account_age_type: string;
        puid1: string;
        puid22: string;
    },
    is_licensed?: boolean;
    album?: IAudioAlbum;
    is_explicit?: boolean;
    is_focus_track?: boolean;
    main_artists?: IAudioArtist[];
    short_videos_allowed?: false;
    stories_allowed?: false;
}

export interface IAudioAlbum {
    id: number;
    title: string;
    owner_id: number;
    access_key: string;
    thumb: IAudioAlbumThumb;
}

export interface IAudioArtist {
    name: string;
    domain: string;
    id: string;
}

export interface IAudioAlbumThumb {
    width: number;
    height: number;
    photo_34: string;
    photo_68: string;
    photo_135: string;
    photo_270: string;
    photo_300: string;
    photo_600: string;
    photo_1200: string;
}

export interface IAudioPlaylist extends IMedia {
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
    meta: {
        view: 'compact';
    };
    audios?: IAudio[];
    year?: number;
    photo: IAudioAlbumThumb;
    is_explicit?: boolean;
    main_artists?: IAudioArtist[];
}

export interface IAudioGenre {
    id: number;
    name: string;
}

export interface IAudioCatalogItem {
    audios?: IAudio[];
    playlists?: IAudioPlaylist[];
    count: number;
    id: string;
    next_from: string;
    source: string;
    subtitle: string;
    thumbs: IAudioAlbumThumb[];
    title: string;
    type: 'audios_special' | 'audios' | 'playlists' | 'top_audios' | 'custom_image_big';
}

export interface IAudioLyrics {
    text: string;
}
