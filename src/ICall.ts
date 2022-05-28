export interface ICall {
    initiator_id: number;
    receiver_id: number;
    state: 'reached'; // ?
    time: number;
    duration: number;
    video: boolean;
}
