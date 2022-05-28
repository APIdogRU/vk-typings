import type { IPhotoSize } from './IPhotoSize';

export interface IPollBackgroundGradient {
    type: 'gradient';
    angle: number;
    color: string;
    id: number;
    name: string;
    points: IPollBackgroundGradientPoint[];
}

export interface IPollBackgroundGradientPoint {
    color: string;
    position: number;
}

export interface IPollBackgroundTile {
    type: 'tile';
    id: number;
    name: string;
    color: string;
    width: number;
    height: number;
    images: IPhotoSize[];
}

export type IPollBackground = IPollBackgroundTile | IPollBackgroundGradient;
