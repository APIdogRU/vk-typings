import type { IStickerpack } from './IStickerpack';

export interface IProduct {
    product: IStickerpack;
    description: string;
    author: string;
    can_purchase: boolean;
    can_gift: boolean;
    free: boolean;
    payment_type: 'balance';
    price: number;
    price_str: string;
    price_buy: number;
    price_buy_str: string;
    price_gift: number;
    price_gift_str: string;
    photo_35: string;
    photo_70: string;
    photo_140: string;
    photo_296: string;
    photo_592: string;
    background: string;
    demo_photos_560: string[];
}
