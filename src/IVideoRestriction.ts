export interface IVideoRestriction {
    title: string;
    text: string;
    blur: 0 | 1;
    can_play: 0 | 1;
    can_preview: 0 | 1;
    // 24, 56, 84, 112
    card_icon: Array<{
        url: string;
        width: number;
        height: number;
    }>;
    button?: {
        action: 'play';
        title: string;
    };
    disclaimer_type: number;
    list_icon: Array<{
        url: string;
        width: number;
        height: number;
    }>;
    icon_name:
        // Видео изъято по обращению правообладателя
        // Видео недоступно, так как страница автора удалена
        // Видео недоступно, так как страница автора заблокирована
        // Видео удалено
        | 'do_not_disturb_outline'

        // Видео доступно только подписчикам
        | 'lock_outline'

        // Видео недоступно на стороннем сайте
        | 'delete_outline'

        // Видео с возрастным ограничением
        | 'hide_outline'
    ;
}
