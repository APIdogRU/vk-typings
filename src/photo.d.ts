export interface IVKPhoto {
    id: number;
    album_id: number;
    owner_id: number;
    user_id: number;
    text: string;
    date: number;
    sizes: IVKPhotoSize[];
    width?: number;
    height?: number;
}

export type TVKPhotoListType = 's' | 'm' | 'x' | 'o' | 'p' | 'q' | 'r' | 'y' | 'z' | 'w';

export interface IVKPhotoSize {
    type: TVKPhotoListType;
    url: string;
    width: number;
    height: number;
}

export interface IVKPhotoDefaultPhotoSizes {
    photo_50: string;
    photo_100: string;
    photo_200: string;
}
