export type CounterKey =
    | 'friends'
    | 'messages'
    | 'photos'
    | 'videos'
    | 'groups'
    | 'notifications'
    | 'menu_notifications_badge'
    | 'notifications_with_pushes'
    | 'menu_discover_badge'
    | 'memories'
    | 'message_requests'
    | 'notifications'
    | 'sdk'
    | 'calls';

export type ICounters = Partial<Record<CounterKey, number>>;
