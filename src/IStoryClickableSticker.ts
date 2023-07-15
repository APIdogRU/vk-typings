import type { IPoll } from './IPoll';
import type { IStoryClickableArea } from './IStoryClickableArea';

/**
 * Документация обкуренная
 * @see https://dev.vk.com/reference/objects/clickable-sticker
 *
 * TODO: разбить по отдельным типам
 */
export interface IStoryClickableSticker {
    type: 'mention' | 'hashtag' | 'poll' | 'post';
    id: number;
    clickable_area: [IStoryClickableArea, IStoryClickableArea, IStoryClickableArea, IStoryClickableArea];

    // type = mention
    mention?: string;

    // type = hashtag
    hashtag?: string;

    // type = poll
    poll?: IPoll;

    style: 'transparent' | 'underline' | 'red_gradient';

    // type = post
    post_owner_id?: number;
    post_id?: number;
}
