import type { IPhotoSize, IPhotoSizeRequireSource } from './IPhotoSize';
import type { IReactionColor } from './IReactionColor';
import type { IReactionTitle } from './IReactionTitle';

export interface IReactionAsset {
    animation_url: string;
    images: Array<Omit<IPhotoSizeRequireSource<IPhotoSize, 'url'>, 'type'>>;
    title: IReactionTitle;
    title_color: IReactionColor;
}
