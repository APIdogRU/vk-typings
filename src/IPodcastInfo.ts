import type { IPhotoSize } from './IPhotoSize';

export interface IPodcastInfo {
    cover: {
        sizes: IPhotoSize[];
    };
    description: string;
    is_favorite: boolean;
    plays: number;
    position: number;
    post: string; // `${number}_${number}`
}
