import type { ILinkButton } from './ILinkButton';
import type { IPhoto } from './IPhoto';

export interface ILink {
    url: string;
    title: string;
    caption?: string;
    description: string;
    photo?: IPhoto;
    product?: unknown; // TODO
    button?: ILinkButton;
    preview_page?: string;
    preview_url?: string;
    target?: 'internal'; // external?
    is_favorite?: boolean;
}
