export interface IKeyboardButtonText {
    type: 'text';
    payload: string;
    label: string;
}

export interface IKeyboardButtonLink {
    type: 'open_link';
    link: string;
    label: string;
    payload: string;
}

export interface IKeyboardButtonLocation {
    type: 'location';
    payload: string;
}

export interface IKeyboardButtonVKPay {
    type: 'vkpay';
    payload: string;
    hash: string;
}

export interface IKeyboardButtonVkApp {
    type: 'open_app';
    app_id: number;
    owner_id: number;
    payload: string;
    label: string;
    hash: string;
}

export interface IKeyboardButtonCallback {
    type: 'callback';
    label: string;
    payload: string;
}

export type IKeyboardButtonAction =
    | IKeyboardButtonText
    | IKeyboardButtonLink
    | IKeyboardButtonLocation
    | IKeyboardButtonVKPay
    | IKeyboardButtonVkApp
    | IKeyboardButtonCallback;
