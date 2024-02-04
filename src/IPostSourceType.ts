export interface IPostSource {
    type: PostSourceType;
    platform?: 'android' | 'iphone' | 'wphone' | 'instagram';
    data?: 'profile_activity' | 'profile_photo' | 'comments' | 'like' | 'poll';
    url?: string;
}

export type PostSourceType = 'vk' | 'widget' | 'api' | 'rss' | 'sms' | 'mvk';
