export interface IVKSticker {
    product_id: number;
    sticker_id: number;
    images: IVKStickerImage[];
    images_with_background: IVKStickerImage[];
}

export interface IVKStickerImage {
    url: string;
    width: number;
    height: number;
}
