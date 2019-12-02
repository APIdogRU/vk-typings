import { IVKMessage } from './message';
import { IVKUser } from './user';
import { IVKGroup } from './group';

export interface IVKApiResponse<T> {
    response: T;
}

export interface IVKApiError {
    error: {
        error_code: number;
        error_msg: string;
        request_params: {
            key: string;
            value: string;
        }[];
        captcha_key?: string;
        captcha_sid?: string;
    }
}

export interface IVKApiList<T> {
    count: number;
    items: T[];
}

export interface IVKApiListExtended<T> extends IVKApiList<T> {
    profiles: IVKUser[];
    groups: IVKGroup[];
}

export interface IVKApiGetLongPollRequest {
    key: string;
    server: string;
    ts: number;
}

export type IVKApiMessagesGetById = IVKApiResponse<IVKApiList<IVKMessage>>;
