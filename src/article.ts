import { IPhoto } from './photo';

export interface IArticle {
    id: number;
    owner_id: number;
    owner_name: string;
    owner_photo: string;
    state: 'available'; // тут не всё
    can_report: boolean;
    title: string;
    subtitle: string;
    views: number;
    shares: number;
    is_favorite: boolean;
    url: string;
    view_url: string;
    no_footer: boolean;
    access_key: string;
    published_date: number;
    photo: IPhoto;
}
