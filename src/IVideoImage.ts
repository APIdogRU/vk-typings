import type { IPhotoSize } from './IPhotoSize';

export interface IVideoImage extends Omit<IPhotoSize, 'type'> {
    with_padding?: 1;
}
