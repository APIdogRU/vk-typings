import type { PhotoSizeType } from './PhotoSizeType';

type PhotoAddressKeyName = 'url' | 'src';

export type IPhotoSize<K extends PhotoAddressKeyName = 'url'> = {
    [A in K]: string;
} & {
    type: PhotoSizeType;
    width: number;
    height: number;
};
