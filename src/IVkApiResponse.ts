import type { IVkApiExecuteError } from './IVkApiExecuteError';

export interface IVkApiResponse<T> {
    response: T;
    execute_errors?: IVkApiExecuteError[];
}
