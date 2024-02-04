import type { IReactionColor } from './IReactionColor';

export interface IReactionTitle {
    color: Record<'foreground' | 'background', IReactionColor>;
}
