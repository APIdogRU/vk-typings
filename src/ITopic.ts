export interface ITopic {
    id: number;
    title: string;
    created: number;
    created_by: number;
    updated: number;
    updated_by: number;
    is_closed: boolean;
    is_fixed: boolean;
    comments: number;
}
