import type { IApplication } from './IApplication';
import type { IStory } from './IStory';

export interface IStoryBlockStories {
    type: 'stories';
    id: string;
    stories: IStory[];
    has_unseen?: boolean;
    name: string;
}

export interface IStoryBlockGrouped {
    type: 'community_grouped_stories';
    grouped: IStoryBlock[];
}

export interface IStoryBlockApp {
    type: 'app_grouped_stories';
    grouped: IStoryBlock[];
    app: IApplication;
}

/**
 * @see https://dev.vk.com/reference/objects/story-feed-item
 */
export type IStoryBlock =
    | IStoryBlockStories
    | IStoryBlockGrouped
    | IStoryBlockApp;
