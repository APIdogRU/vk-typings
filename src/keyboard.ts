export interface IKeyboard {
    one_time: boolean;
    buttons: IKeyboardButton[][];
    inline: boolean;
}

export type KeyboardButtonColor = 'primary' | 'secondary' | 'negative' | 'positive';

export interface IKeyboardButton {
    // action: IVKKeyboardButtonAction;
    action: IKeyboardButtonAction;
    color: KeyboardButtonColor;
}

export type IKeyboardButtonAction = IKeyboardButtonText | IKeyboardButtonLink | IKeyboardButtonLocation | IKeyboardButtonVKPay | IKeyboardButtonVkApp;

export type IKeyboardButtonType = 'location' | 'vkpay' | 'open_app';

export interface IKeyboardButtonText {
    type: 'text';
    payload: string;
    label: string;
}

export interface IKeyboardButtonLink {
    type: 'open_link';
    link: string;
    label: string;
}

export interface IKeyboardButtonLocation {
    type: 'location';
}

export interface IKeyboardButtonVKPay {
    type: 'vkpay';
}

export interface IKeyboardButtonVkApp {
    type: 'open_app';
    app_id: number;
    owner_id: number;
    label: string;
    hash: string;
}

