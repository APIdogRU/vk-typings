import type { ISticker } from './ISticker';
import type { IStickerImage } from './IStickerImage';

export interface IStickerpack {
    type: 'stickers';
    id: number;
    purchased: 0 | 1;
    active: 0 | 1;
    purchaged_date?: number;
    title: string;
    stickers: Pick<ISticker, 'sticker_id' | 'is_allowed' | 'images' | 'images_with_background'>[];
    icon: {
        base_url: string;
    };
    previews: IStickerImage[];
}
