export interface IVkApiList<T> {
    count: number;
    items: T[];
    next_from?: string;
}
