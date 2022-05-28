import type { IPhotoPrivacyBlock } from './IPhotoPrivacyBlock';

export interface IPhotoPrivacy {
    category?: 'all' | 'friends' | 'friends_of_friends' | 'friends_of_friends_only' | 'only_me';
    owners?: IPhotoPrivacyBlock;
    lists?: IPhotoPrivacyBlock;
}
