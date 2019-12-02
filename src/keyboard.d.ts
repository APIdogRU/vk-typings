export interface IVKKeyboard {
    one_time: boolean;
    buttons: IVKKeyboardButton[];
    inline: boolean;
}

export type TVKKeyboardButtonColor = 'primary' | 'secondary' | 'negative' | 'positive';

export interface IVKKeyboardButton {
    // action: IVKKeyboardButtonAction;
    action: Record<string, any>;
    color: TVKKeyboardButtonColor;
}

export type IVKKeyboardButtonAction<T> = T;
