import type { IGift } from './IGift';

export interface IGiftItemMarket {
    gift: IGift & {
        stickers_product_id?: number;
        keywords?: string;
    };
    /** Отсутствует, если disabled=1 */
    payment_type?: 'balance';
    /** Отсутствует, если disabled=1 */
    price?: number;
    /** Отсутствует, если disabled=1 */
    price_str?: string;
    gifts_left?: number;
    real_price?: number;
    real_price_str?: string;
    description?: string;
    disabled?: boolean;
    sticker_pack?: {
        title: string;
        description: string;
        author: string;
    };
}
