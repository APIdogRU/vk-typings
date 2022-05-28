import type { IStickerImage } from './IStickerImage';

export interface ISticker {
    sticker_id: number;
    product_id: number;
    images: IStickerImage[];
    images_with_background: IStickerImage[];
    animation_url?: string;
    is_allowed: boolean;
}
