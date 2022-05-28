import type { IGift } from './IGift';

/** Элемент в списке подарков пользователя */
export interface IGiftItem {
    id: number;
    from_id: number;
    message: string,
    date: number;
    gift: IGift;
    privacy?: number,
    gift_hash?: string;
}
