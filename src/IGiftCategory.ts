import type { IGiftItemMarket } from './IGiftItemMarket';

export interface IGiftCategory {
    title: string;
    name: string;
    items: IGiftItemMarket[];
}
