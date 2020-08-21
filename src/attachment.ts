import { INote } from './note';
import { IPoll } from './poll';
import { IGift } from './gift';
import { IPhoto, IPostedPhoto, IPhotoGraffiti } from './photo';
import { IComment } from './comment';
import { IAudioMessage } from './audio-message';
import { IVideo } from './video';
import { IAudio, IAudioPlaylist } from './audio';
import { IDocument } from './doc';
import { ILink } from './link';
import { IWall } from './wall';
import { ISticker } from './sticker';
import { IPostApp } from './app';

type ISupportedAttachments = {
    photo: IPhoto;
    video: IVideo;
    audio: IAudio;
    doc: IDocument;
    link: ILink;
    wall: IWall;
    sticker: ISticker;
    page: number;
    poll: IPoll;
    album: number;
    note: INote;
    gift: IGift;
    posted_photo: IPostedPhoto;
    graffiti: IPhotoGraffiti;
    app: IPostApp;
    wall_reply: IComment & {
        post_id: number;
        owner_id: number;
    };
    audio_message: IAudioMessage;
    audio_playlist: IAudioPlaylist;

    // event: IEvent;
    // photos_list // deprecated
    // market: IMarket;
    // market_album: IMarketAlbum;
    // pretty_cards
};

export type AttachmentType = keyof ISupportedAttachments;

type IAttachmentObject<K extends AttachmentType> = {
    [P in K]: ISupportedAttachments[K];
};

export type IAttachment<T extends AttachmentType> = { type: T } & IAttachmentObject<T>;

export type IAttachmentList = IAttachment<AttachmentType>[];
