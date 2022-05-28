import type { IVkApiList } from './IVkApiList';
import type { IComment } from './IComment';

export interface ICommentThread extends IVkApiList<IComment> {
    can_post: boolean;
    show_reply_button: boolean;
    groups_can_post: boolean;
}
