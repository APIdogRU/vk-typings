export interface ISticker {
    product_id: number;
    is_allowed: boolean;
    sticker_id: number;
    images: IStickerImage[];
    images_with_background: IStickerImage[];
    animation_url?: string;
}

export interface IStickerImage {
    url: string;
    width: number;
    height: number;
}

export interface IProduct {
    product: IStickerPack;
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

export interface IStickerPack {
    id: number;
    type: 'stickers';
    purchased: boolean;
    active: boolean;
    title: string;
    stickers: ISticker[];
    icon: IStickerImage[];
    previews: IStickerImage[];
}
