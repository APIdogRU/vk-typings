import type { ICurrency } from './ICurrency';

export interface IMarketPrice {
    amount: string;
    currency: ICurrency;
    old_amount?: string;
    text: string;
}
