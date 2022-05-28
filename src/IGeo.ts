import type { ICoordinates } from './ICoordinates';
import type { IPlace } from './IPlace';

export interface IGeo {
    type: string;
    coordinates: ICoordinates | `${number} ${number}`;
    place?: IPlace;
    showmap?: 0 | 1;
}
