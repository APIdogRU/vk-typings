export interface IPeer {
    id: number;
    type: 'user' | 'chat' | 'group' | 'email';
    local_id: number;
}
