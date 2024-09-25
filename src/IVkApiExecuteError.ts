import type { IVkApiErrorObject } from './IVkApiErrorObject';

export interface IVkApiExecuteError extends Pick<IVkApiErrorObject, 'error_code' | 'error_msg'> {
    method: string;
}
