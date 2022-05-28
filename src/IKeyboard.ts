import type { IKeyboardButton } from './IKeyboardButton';

export interface IKeyboard {
    one_time: boolean;
    buttons: IKeyboardButton[][];
    inline: boolean;
}
