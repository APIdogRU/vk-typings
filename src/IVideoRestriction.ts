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
        | 'lock_outline' // Видео доступно только подписчикам
        | 'delete_outline' // Видео недоступно на стороннем сайте
    ;
}
