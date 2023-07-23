export interface IAudioMessage {
    id: number;
    owner_id: number;
    access_key: string;
    duration: number;
    waveform: number[];
    link_ogg: string;
    link_mp3: string;
    transcript?: string;
    transcript_state: 'done' | 'in_progress';
}
