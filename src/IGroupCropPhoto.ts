import type { IPhoto } from './IPhoto';

export interface IGroupCropPhoto {
    photo: IPhoto;
    crop: {
        x: number;
        y: number;
        x2: number;
        y2: number;
    };
    rect: {
        x: number;
        y: number;
        x2: number;
        y2: number;
    };
}
