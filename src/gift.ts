export interface IGift {
    id: number;
    thumb_256: string;
    thumb_96: string;
    thumb_48: string;
}

export interface IGiftItem {
    id: number;
    from_id: number;
    message: string,
    date: number;
    gift: IGift;
    privacy?: number,
    gift_hash?: string;
}

export interface IGiftCategory {
    title: string;
    name: string;
    items: IGiftItemMarket[];
}

export interface IGiftItemMarket {
    gift: IGift;
    payment_type: 'balance';
    price: number;
    price_str: string;
    gifts_left?: number;
    real_price?: number;
    real_price_str?: string;
    description?: string;
}
