import type { IComment } from './IComment';

export type IPhotoComment = Omit<IComment, 'owner_id' | 'post_id'>;
