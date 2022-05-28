import type { IDocumentPreview } from './IDocumentPreview';

export interface IDocument {
    owner_id: number;
    id: number;
    access_key?: string;
    title: string;
    size: number;
    ext: string;
    url: string;
    date: number;
    type: number;
    is_licensed?: 0 | 1;
    preview?: IDocumentPreview;
}