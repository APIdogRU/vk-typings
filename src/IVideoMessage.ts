import type { IVideo } from './IVideo';

/**
 * Видеосообщение.
 * Возвращается только при v=5.200+
 */
export interface IVideoMessage extends IVideo {
    shape_id: number;
    transcript_state: 'done' | 'in_progress';
    ov_id: string;
}
