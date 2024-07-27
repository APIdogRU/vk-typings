import type { IAddress } from './IAddress';

export interface IGroupMainAddressDisabled {
    is_enabled: false;
}

export interface IGroupMainAddressEnabled {
    is_enabled: true,
    main_address_id: number;
    main_address: IAddress;
    count: number;
}

export type IGroupMainAddress = IGroupMainAddressEnabled | IGroupMainAddressDisabled;
