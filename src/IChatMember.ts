export interface IChatMember {
    member_id: number;
    invited_by: number;
    join_date: number;
    is_admin?: boolean;
    is_owner?: boolean;
}
