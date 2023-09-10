import type { IPhotoSize, IPhotoSizeRequireSource } from './IPhotoSize';

export interface IPollPhoto {
    id: number;
    color: string;
    images: Array<IPhotoSizeRequireSource<IPhotoSize, 'url'>>;
}
