import type { IPhotoSizeRequireSource, IPhotoSize, IPhotoSizeRequireType } from './IPhotoSize';

export interface IDocumentPreview {
    photo?: IDocumentPreviewPhoto;
    video?: IDocumentPreviewVideo;
    graffiti?: IDocumentPreviewGraffiti;
    /** @deprecated */
    audio_message?: IDocumentPreviewAudioMessage;
}

export interface IDocumentPreviewPhoto {
    sizes: Array<IPhotoSizeRequireType<IPhotoSizeRequireSource<IPhotoSize, 'src'>>>;
}

export interface IDocumentPreviewVideo {
    src: string;
    width: number;
    height: number;
    file_size: number;
}

export interface IDocumentPreviewGraffiti {
    src: string;
    width: number;
    height: number;
}

/** @deprecated */
export interface IDocumentPreviewAudioMessage {
    duration: number;
    waveform: number[];
    link_ogg: string;
    link_mp3: string;
}
