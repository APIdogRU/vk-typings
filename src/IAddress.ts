import type { IAddressMetroStation } from './IAddressMetroStation';
import type { ICity } from './ICity';
import type { ICountry } from './ICountry';

export interface IAddress {
    /** Идентификатор адреса */
    id: number;

    /** Идентификатор страны (отсутствует в main_address) */
    country_id?: number;

    /** Страна */
    country: ICountry;

    /** Идентификатор города (отсутствует в main_address) */
    city_id?: number;

    /** Город */
    city: ICity;

    /** Станция метро */
    metro_station?: IAddressMetroStation;

    /** Заголовок адреса */
    title: string;

    /** Строка адреса */
    address: string;

    /** Описание адреса */
    additional_address: string;

    /** Географическая широта отметки, заданная в градусах (от -90 до 90). (отсутствует в main_address) */
    latitude: number;

    /** Географическая долгота отметки, заданная в градусах (от -180 до 180). (отсутствует в main_address) */
    longitude: number;

    /** Расстояние до цели в метрах */
    distance?: number;

    /** Номер телефона */
    phone?: string;

    /** Смещение времени в минутах относительно UTC. */
    time_offset?: number;

    /** Идентификатор станции метрополитена */
    metro_station_id?: number;

    /** Тип расписания */
    work_info_status: AddressWorkInfoStatus;

    /** Расписание (при work_info_status=timetable и не в объекте group) */
    timetable?: Partial<Record<AddressTimetableDayKey, IAddressTimetableDay>>;
}

export type AddressWorkInfoStatus =
    | 'no_information' // нет информации о расписании;
    | 'temporarily_closed' // временно закрыто;
    | 'always_opened' // открыто круглосуточно;
    | 'forever_closed' // закрыто навсегда;
    | 'timetable' //  открыто в указанные часы работы (см. timetable)
;

export type AddressTimetableDayKey = 'fri' | 'mon' | 'sat' | 'sun' | 'thu' | 'tue' | 'wed';

export interface IAddressTimetableDay {
    /** Начало рабочего дня */
    open_time: number;

    /** Конец рабочего дня */
    close_time: number;

    /** Начало перерыва */
    break_close_time: number;

    /** Конец перерыва */
    break_open_time: number;
}
