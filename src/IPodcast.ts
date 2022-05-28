import type { IAudio } from './IAudio';
import type { IPodcastInfo } from './IPodcastInfo';

/**
 * @example wall-167915299_15304
 */
export interface IPodcast extends IAudio {
    podcast_info: IPodcastInfo;
}
