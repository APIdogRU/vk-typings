export interface IPeer {
    id: number;
    type: 'user' | 'chat' | 'group' | 'email' | 'contact';
    local_id: number;
}
