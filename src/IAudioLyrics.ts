import type { IAudioLyricsTimestamp } from './IAudioLyricsTimestamp';

export interface IAudioLyrics {
    md5: string;
    lyrics: {
        language: string; // ru, en
        timestamps: IAudioLyricsTimestamp[];
    };
    credits: string;
}
