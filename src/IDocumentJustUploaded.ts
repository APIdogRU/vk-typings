import type { IAudioMessage } from './IAudioMessage';
import type { IDocument } from './IDocument';

interface IDocumentJustUploadedDocument {
    type: 'doc';
    doc: IDocument;
}

interface IDocumentJustUploadedAudioMessage {
    type: 'audio_message';
    audio_message: IAudioMessage;
}

export type IDocumentJustUploaded = IDocumentJustUploadedDocument | IDocumentJustUploadedAudioMessage;
