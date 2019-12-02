export interface IVKAudio {
    id: number;
    owner_id: number;
    artist: string;
    title: string;
    duration: number;
    url: string;
    lyrics_id: number;
    album_id: number;
    genre_id: number;
    date: number;
    no_search: boolean;
    is_hq?: boolean;
}
