import type { IStoryClickableArea } from './IStoryClickableArea';

/**
 * Документация обкуренная
 * @see https://dev.vk.com/reference/objects/clickable-sticker
 */
export interface IStoryClickableSticker {
    type: 'mention' | 'hashtag';
    id: number;
    mention?: string;
    hashtag?: string;
    clickable_area: [IStoryClickableArea, IStoryClickableArea, IStoryClickableArea, IStoryClickableArea];
    style: 'transparent' | 'underline' | 'red_gradient';
}
