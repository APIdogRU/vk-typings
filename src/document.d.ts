import { IVKPhotoSize } from './photo';

export interface IVKDocument {
    id: number;
    owner_id: number;
    title: string;
    size: number;
    ext: string;
    url: string;
    date: number;
    type: number;
    preview: IVKDocumentPreview;
}

export interface IVKDocumentPreview {
    photo?: IVKDocumentPreviewPhoto;
    graffiti?: IVKDocumentPreviewGraffiti;
    audio_message?: IVKDocumentPreviewAudioMessage;
}

export interface IVKDocumentPreviewPhoto {
    sizes: IVKPhotoSize[];
}

export interface IVKDocumentPreviewGraffiti {
    src: string;
    width: number;
    height: number;
}

export interface IVKDocumentPreviewAudioMessage {
    duration: number;
    waveform: number[];
    link_ogg: string;
    link_mp3: string;
}
