import { IVKPhoto } from './photo';

export interface IVKLink {
    url: string;
    title: string;
    caption: string;
    description: string;
    photo?: IVKPhoto;
    product?: never; // TODO
    button?: IVKLinkButton;
    preview_page?: string;
    preview_url?: string;
}

export interface IVKLinkButton {
    title: string;
    action: IVKLinkButtonAction;
}

export interface IVKLinkButtonAction {
    type: 'open_url';
    url: string;
}
