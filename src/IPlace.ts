import type { ICoordinates } from './ICoordinates';

export interface IPlace extends ICoordinates {
    id: number;
    title: string;
    created: number;
    icon: string;
    country: string;
    city: string;
}
