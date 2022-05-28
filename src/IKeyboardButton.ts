import type { IKeyboardButtonAction } from './IKeyboardButtonAction';

export type KeyboardButtonColor = 'primary' | 'secondary' | 'negative' | 'positive';

export interface IKeyboardButton {
    // action: IVKKeyboardButtonAction;
    action: IKeyboardButtonAction;
    color: KeyboardButtonColor;
}
