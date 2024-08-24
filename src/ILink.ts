import type { IApplication } from './IApplication';
import type { ILinkButton } from './ILinkButton';
import type { IPhoto } from './IPhoto';

export interface ILink {
    /** Отсутствует при наличии app */
    url?: string;
    title: string;
    caption?: string;
    description: string;
    photo?: IPhoto;
    product?: unknown; // TODO
    button?: ILinkButton;
    button_text?: string;
    preview_page?: string;
    preview_url?: string;
    target?: 'internal'; // external?
    is_favorite?: boolean;
    app?: IApplication;
    is_default_description?: boolean;
    is_default_icon?: boolean;
}
