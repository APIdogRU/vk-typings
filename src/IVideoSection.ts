import type { IVideo } from './IVideo';
import type { IVideoAlbum } from './IVideoAlbum';

/** Сломано */
export interface IVideoSection {
    id: string;
    name: string;
    total_count: number;
    blocks: IVideoSectionBlock[];
}

export interface IVideoSectionBlock {
    title: string;
    block_layout: 'slider' | 'large_list' | 'list';
    page_layout: 'list';
    type: 'videos' | 'action' | 'albums'
    videos: IVideo[];
    albums: IVideoAlbum[];
}
