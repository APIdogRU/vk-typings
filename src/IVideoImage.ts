import type { IPhotoSize, IPhotoSizeRequireSource } from './IPhotoSize';

export interface IVideoImage extends IPhotoSizeRequireSource<IPhotoSize, 'url'> {
    with_padding?: 1;
}
