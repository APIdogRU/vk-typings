export interface ILinkButton {
    title: string;
    action: ILinkButtonAction;
}

export interface ILinkButtonAction {
    type: 'open_url';
    url: string;
}
