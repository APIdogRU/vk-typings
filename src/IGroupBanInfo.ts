export interface IGroupBanInfo {
    end_date: number;
    comment: string;
    /** При запросе от имени админа сообщества */
    admin_id?: number;
    /** При запросе от имени админа сообщества */
    date?: number;
}
