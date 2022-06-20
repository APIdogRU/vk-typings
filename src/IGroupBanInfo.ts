export interface IGroupBanInfo {
    /** При запросе от имени админа сообщества */
    admin_id?: number;
    comment: string;
    /** При запросе от имени админа сообщества */
    comment_visible?: boolean;
    /** При запросе от имени админа сообщества */
    date?: number;
    end_date: number;
    reason?: number;
}
