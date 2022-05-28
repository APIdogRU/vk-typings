import type { IPhotoSize } from './IPhotoSize';

export interface IPrettyCards {
    cards: IPrettyCard[];
}

export interface IPrettyCard {
    card_id: string;
    link_url: string;
    title: string;
    images: Exclude<IPhotoSize, 'type'>[];
    button: object; // wtf
    price: string;
    price_old?: string;
}