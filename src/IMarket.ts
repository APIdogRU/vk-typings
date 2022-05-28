import type { ILikesInfo } from './ILikesInfo';
import type { IMarketCategory } from './IMarketCategory';
import type { IMarketDimensions } from './IMarketDimensions';
import type { IMarketPrice } from './IMarketPrice';
import type { IPhoto } from './IPhoto';

export interface IMarket {
    owner_id: number;
    id: number;
    title: string;
    description: string;
    price: IMarketPrice;
    dimensions?: IMarketDimensions;
    weight?: number;
    category?: IMarketCategory;
    thumb_photo?: string;
    date: number;
    availability?: 0 | 1 | 2;
    is_favorite?: boolean;
    sku: string;
    /** Передаётся если extended=1 */
    photos?: IPhoto[];
    /** Передаётся если extended=1 */
    can_comment?: 0 | 1;
    /** Передаётся если extended=1 */
    can_repost?: 0 | 1;
    /** Передаётся если extended=1 */
    likes?: Pick<ILikesInfo, 'user_likes' | 'count'>;
    /** Передаётся если extended=1 */
    url?: string;
    /** Передаётся если extended=1 */
    button_title?: string; // 'Купить' | 'Перейти в магазин' | 'Купить билет'
}
