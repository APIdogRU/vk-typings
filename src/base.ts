import { IUser } from './user';
import { IGroup } from './groups';

export interface IApiResponse<T> {
    response: T;
}

export interface IApiError {
    error: IApiErrorObject;
}

export interface IApiErrorObject extends Error {
    error_code: number;
    error_msg: string;
    request_params: {
        key: string;
        value: string;
    }[];
    captcha_sid?: string;
    captcha_img?: string;
    redirect_uri?: string;
}

export interface IApiList<T> {
    count: number;
    items: T[];
    next_from?: string;
}

export type IApiListExtended<T> = IApiList<T> & {
    profiles: IUser[];
    groups: IGroup[];
};
