import type { IAudio } from './IAudio';
import type { IAudioAlbumThumb } from './IAudioAlbumThumb';
import type { IAudioPlaylist } from './IAudioPlaylist';

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
