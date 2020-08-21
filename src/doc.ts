import { IPhotoSize } from './photo';
import { IMedia } from './media';

export interface IDocument extends IMedia {
    title: string;
    size: number;
    ext: string;
    url: string;
    date: number;
    type: number;
    preview: IDocumentPreview;
}

type IDocumentPreviewName = keyof IDocumentPreview;
export type IUploadedDocument<T extends IDocumentPreviewName> = {
    type: T;
} & {
    [S in T]: IDocument;
} & IMedia; // owner_id + id тут нет

export interface IDocumentPreview {
    photo?: IDocumentPreviewPhoto;
    video?: IDocumentPreviewVideo;
    graffiti?: IDocumentPreviewGraffiti;
    audio_message?: IDocumentPreviewAudioMessage;
}

export interface IDocumentPreviewPhoto {
    sizes: IPhotoSize<'src'>[];
}

export interface IDocumentPreviewVideo {
    src: string;
}

export interface IDocumentPreviewGraffiti {
    src: string;
    width: number;
    height: number;
}

export interface IDocumentPreviewAudioMessage {
    duration: number;
    waveform: number[];
    link_ogg: string;
    link_mp3: string;
}
