import type { ICoordinates } from './ICoordinates';

export interface IPlace extends ICoordinates {
    id: number;
    title: string;
    created: number;
    updated: number;
    icon?: string;
    country: string;
    city: string;
    is_deleted: boolean;
    total_checkins: number;
}
