import type { IReactionAsset } from './IReactionAsset';

export interface IReaction {
    id: number;
    title: string;
    asset: IReactionAsset;
}
