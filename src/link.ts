import { IPhoto } from './photo';

export interface ILink {
    url: string;
    title: string;
    caption: string;
    description: string;
    photo?: IPhoto;
    product?: any; // TODO
    button?: ILinkButton;
    preview_page?: string;
    preview_url?: string;
    target?: 'internal'; // external?
    is_favorite?: boolean;
}

export interface ILinkButton {
    title: string;
    action: ILinkButtonAction;
}

export interface ILinkButtonAction {
    type: 'open_url';
    url: string;
}
