export interface IEvent {
    id: number;
    time: number;
    member_status: 1 | 2 | 3;
    is_favorite: boolean;
    address: string;
    text: string;
    button_text: string;
    friends: number[];
}
