import type { IVkApiError } from './IVkApiError';
import type { IVkApiResponse } from './IVkApiResponse';

export type IVkApiResult<T = any> = IVkApiResponse<T> | IVkApiError;
