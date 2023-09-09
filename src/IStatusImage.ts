export interface IStatusImage {
    id: number;
    name: string;
    images: Array<{
        url: string;
        width: number;
        height: number;
    }>;
}
