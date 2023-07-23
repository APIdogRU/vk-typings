import type { IVideo } from './IVideo';

/**
 * Видеосообщение.
 * Возвращается только при v=5.200+
 */
export interface IVideoMessage extends IVideo {
    shape_id: number;
    transcript_state: 'in_progress';
    ov_id: string;
    /** only without callback */
    timeline_thumbs?: {
        count_per_image: number;
        count_per_row: number;
        count_total: number;
        frame_height: number;
        frame_width: number;
        links: string[];
        is_uv: boolean;
        frequency: number;
    };
    /** only without callback */
    can_play_in_background?: boolean;
    /** only without callback */
    can_download?: boolean;
}
