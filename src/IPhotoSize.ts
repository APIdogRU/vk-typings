import type { PhotoSizeType } from './PhotoSizeType';

export interface IPhotoSize {
    width: number;
    height: number;

    /**
     * IPhotoAlbum
     * IAudioAlbum
     * IDocumentPreviewPhoto
     * IPhoto
     * IStoryPhoto
     */
    type?: PhotoSizeType;

    /**
     * IPhotoAlbum
     * IPhoto
     * IStoryPhoto
     * IVideo
     * IVideoAlbum
     * IPoll
     */
    url?: string;

    /**
     * IPhotoAlbum
     * IAudioAlbum
     * IDocumentPreviewPhoto
     */
    src?: string;
}

type SourceField = 'url' | 'src';

/**
 * @internal
 */
export type IPhotoSizeRequireSource<
    T extends IPhotoSize,
    F extends SourceField,
> = Omit<T, SourceField> & Required<{
    [field in F]: Exclude<IPhotoSize[F], undefined>;
}>;

/**
 * @internal
 */
export type IPhotoSizeRequireType<T extends IPhotoSize> = Omit<T, 'type'> & Required<{
    type: Exclude<IPhotoSize['type'], undefined>;
}>;
