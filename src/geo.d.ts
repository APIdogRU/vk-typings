export interface IVKCoordinates {
    latitude: number;
    longitude: number;
}

export interface IVKGeo {
    type: string;
    coordinates: IVKCoordinates;
    place?: IVKPlace;
}

export interface IVKPlace extends IVKCoordinates {
    id: number;
    title: string;
    created: number;
    icon: string;
    country: string;
    city: string;
}
