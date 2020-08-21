export type IBasicItem<N extends string = 'title'> = { id: number } & {
    [A in N]: string;
};

export type ICountry = IBasicItem;
export type ICity = IBasicItem;
