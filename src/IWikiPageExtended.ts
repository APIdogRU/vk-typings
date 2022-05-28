import type { IWikiPageFull } from './IWikiPageFull';

export interface IWikiPageExtended extends IWikiPageFull {
    source: string;
    html: string;
    view_url: string;
}
