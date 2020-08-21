export interface ICoordinates {
    latitude: number;
    longitude: number;
}

export interface IGeo {
    type: string;
    coordinates: ICoordinates | string;
    place?: IPlace;
    showmap?: boolean;
}

export interface IPlace extends ICoordinates {
    id: number;
    title: string;
    created: number;
    icon: string;
    country: string;
    city: string;
}
