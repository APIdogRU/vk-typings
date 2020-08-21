export interface IAudioMessage {
    id: number;
    owner_id: number;
    duration: number;
    waveform: number[];
    link_ogg: string;
    link_mp3: string;
    access_key: string;
    transcript?: string;
    transcript_state: 'done';
}
