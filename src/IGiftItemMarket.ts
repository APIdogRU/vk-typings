import type { IGift } from './IGift';

export interface IGiftItemMarket {
    gift: IGift;
    payment_type: 'balance';
    price: number;
    price_str: string;
    gifts_left?: number;
    real_price?: number;
    real_price_str?: string;
    description?: string;
    disabled?: boolean;
}
