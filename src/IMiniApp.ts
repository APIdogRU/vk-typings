import type { IApplication } from './IApplication';
import type { IPhotoSize } from './IPhotoSize';

export interface IMiniApp {
    title: string;
    description: string;
    app: IApplication;
    images: IPhotoSize[];
    button_text: string;
    is_default_icon?: boolean;
    is_default_description?: boolean;
}
